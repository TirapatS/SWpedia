import { useState, useEffect } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
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
            <h1>Peoples</h1> 

            {peoples.length > 0 && (
                <ListGroup>
                    {peoples.map(people =>
                        <ListGroup.Item
                            action
                            as={Link}
                            key={people.id}
                            to={`/people/${people.id}`}
                        >
                            {people.name}
                        </ListGroup.Item>
                    )}
                </ListGroup>
            )}
        </>
    )
}


export default PeoplesPage;