import { useState, useEffect } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import SWAPI from '../services/SW-API'

import '../assets/style.css'

const PeoplesPage = () => {

    const [peoples, setPeople] = useState([])

    const getPeoples = async () => {
        
        const data = await SWAPI.getPeoples()

        setPeople(data.results)

        data.results.sort((a, b) => a.episode_id - b.episode_id)
    }
        useEffect(() =>{
            getPeoples()
    }, [])

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
                            <p><strong>Appeared in</strong> {people.films.length} movies</p>
                            <p><strong>Born</strong> {people.birth_year}</p>
                        </ListGroup.Item>
                    )}
                </ListGroup>
            )}
            
            <div className="mt-3">
                <Button>Previous Page</Button>
                <Button>Next Page</Button>
            </div>
            
        </>
    )
}


export default PeoplesPage;