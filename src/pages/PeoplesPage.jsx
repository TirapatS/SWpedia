import { useState, useEffect } from 'react'

import ListGroup from 'react-bootstrap/ListGroup'
import Spinner from 'react-bootstrap/Spinner'

import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'

import SWAPI from '../services/SW-API'

import getIdFromUrl from '../helpers/index'

import '../assets/style.css'

const PeoplesPage = () => {

    const [peoples, setPeople] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(2)

    const getPeoples = async () => {
        
        const data = await SWAPI.getPeoples()
        setPeople(data)

        setLoading(true)

    }
        useEffect(() =>{
            getPeoples()
    }, [])

    const getNextPage = () => {
        setPage(page + 1)
        fetch(`https://swapi.dev/api/people/?page=${page}`)
        .then((response) => response.json())
        .then((response) => {
            console.log("response",response)
            setPeople(response)
        })
        .catch(()=> {
            console.log("Error")
        })
        
    }

    const getPrevPage = () => {
        setPage(page - 1)
        fetch(`https://swapi.dev/api/people/?page=${page - 2}`)
        .then((response) => response.json())
        .then((response) => {
            console.log("response",response)
            if(!response) {
                setLoading(true)
            }
            setPeople(response)
        })
        .catch(()=> {
            console.log("Error")
        })
    }

    if(!loading) {
        return (
            <>
                <span className="loading">Loading...</span>
                <Spinner animation="border" variant="light">
                </Spinner>
            </>
          
        )
    }

    return (
        <>
            <h1 className="mb-3">Peoples</h1> 

            {peoples.results.length > 0 && (
                <ListGroup>
                    {peoples.results.map(people =>
                        <ListGroup.Item
                            action
                            as={Link}
                            key={getIdFromUrl(people.url)}
                            to={`/people/${getIdFromUrl(people.url)}`}
                        >
                            <h4>{people.name}</h4>
                            <p><strong>Born</strong> {people.birth_year}</p>
                            <p><strong>Appeared in</strong> {people.films.length} movie/s</p>
                        </ListGroup.Item>
                    )}
                </ListGroup>
            )}

            {/* If peoples.next or peoples.previous exists, display them. */}
            {peoples && (peoples.next || peoples.previous) ? (
                 
            <div className="d-flex justify-content-between mt-3">
                <Button 
                    onClick={getPrevPage}
                    disabled={!peoples.previous}
                    variant="secondary" size="md">
                    Previous Page
                </Button>
                <div>
                    <h3>Page {page-1}</h3>
                </div>
                <Button
                    onClick={getNextPage}
                    disabled={!peoples.next}
                    variant="secondary" size="md">
                    Next Page
                </Button>
            </div>
            ) : null}
           
            
        </>
    )
}


export default PeoplesPage;