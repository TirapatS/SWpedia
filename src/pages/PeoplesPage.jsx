import { useState, useEffect } from 'react'

import ListGroup from 'react-bootstrap/ListGroup'
import Spinner from 'react-bootstrap/Spinner'

import { Link } from 'react-router-dom'

import BrowsePage from '../components/BrowsePages'

import SWAPI from '../services/SW-API'

import '../assets/style.css'

const PeoplesPage = () => {

    const [peoples, setPeople] = useState([])
    const [loading, setLoading] = useState(false)

    const getPeoples = async () => {
        
        const data = await SWAPI.getPeoples()

        setPeople(data.results)

        setLoading(true)

        data.results.sort((a, b) => a.episode_id - b.episode_id)
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
                            key={people.id}
                            to={`/people/${people.id}`}
                        >
                            <h4>{people.name}</h4>
                            <p><strong>Appeared in</strong> {people.films.length} movie/s</p>
                            <p><strong>Born</strong> {people.birth_year}</p>
                        </ListGroup.Item>
                    )}
                </ListGroup>
            )}
            
           <BrowsePage />
            
        </>
    )
}


export default PeoplesPage;