import { useState, useEffect } from 'react'

import Spinner from 'react-bootstrap/Spinner'
import ListGroup from 'react-bootstrap/ListGroup'

import { Link, useParams } from 'react-router-dom'

import SWAPI from '../services/SW-API'

const PeoplePage = () => {
    const [People, setPeople] = useState()
	const { id } = useParams()
    const [loading, setLoading] = useState(false)

	const getPeople = async (id) => {
		const data = await SWAPI.getPeople(id)
		setPeople(data)
        console.log("got data", data)

        setLoading(true)
	}

	useEffect(() => {
		getPeople(id)
	}, [id])

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
           <h1>{People.name}</h1>

           <div className="card">
                <p><strong>Height:</strong> {People.height}</p>
                <p><strong>Mass:</strong> {People.mass}</p>
                <p><strong>Hair Color:</strong> {People.hair_color}</p>
                <p><strong>Skin Color:</strong> {People.skin_color}</p>
                <p><strong>Eye Color:</strong> {People.eye_color}</p>
                <p><strong>Born:</strong> {People.birth_year}</p>
                <p><strong>Gender:</strong> {People.gender}</p>
               <div className="mt-5">
                    <h5>Appeared in</h5>

                    <div>
                        
                    </div>
               </div>
           </div>
            
        </>
    )
}

export default PeoplePage;