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

    const getPeoples = async () => {
        
        const data = await SWAPI.getPeoples()

        setPeople(data.results)

        setLoading(true)

    }
        useEffect(() =>{
            getPeoples()
    }, [])

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

            {peoples.length > 0 && (
                <ListGroup>
                    {peoples.map(people =>
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
            
            <div className="d-flex justify-content-between mt-3">
                <Button as={Link} to={[]} variant="secondary" size="md">
                    Previous Page
                </Button>
                <Button as={Link} to={[]} variant="secondary" size="md">
                    Next Page
                </Button>
            </div>
            
        </>
    )
}


export default PeoplesPage;