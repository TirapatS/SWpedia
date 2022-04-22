import { useState, useEffect } from 'react'

import Spinner from 'react-bootstrap/Spinner'
import ListGroup from 'react-bootstrap/ListGroup'

import { Link, useParams } from 'react-router-dom'

import SWAPI from '../services/SW-API'

import getIdFromUrl from '../helpers/index'

const FilmPage = () => {
    const [Film, setFilm] = useState()
	const { id } = useParams()
    const [loading, setLoading] = useState(false)

	const getFilm = async (id) => {
		const data = await SWAPI.getFilm(id)
		setFilm(data)
        console.log("got data", data)
        console.log()

        setLoading(true)
	}

	useEffect(() => {
		getFilm(id)
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
           <h1>{Film.title}</h1>

           <div className="card">
                <h4>Episode: {Film.episode_id}</h4>
                <p><strong>Released:</strong> {Film.release_date}</p>
                <p><strong>Director:</strong> {Film.director}</p>
                <p><strong>Producer/s:</strong> {Film.producer}</p>
               <div>
                    <h5>Characters</h5>
                    {Film.characters.length > 0 && (
                        <ListGroup>
                            {Film.characters.map(people =>
                                <ListGroup.Item
                                    action
                                    as={Link}
                                    key={getIdFromUrl(people)}
                                    to={`/people/${getIdFromUrl(people)}`}
                                >
                                    <p><u>Character {getIdFromUrl(people)} <i className="fa-solid fa-arrow-right"></i></u></p>
                                </ListGroup.Item>
                            )}
                        </ListGroup>
                    )}
                   
               </div>
           </div>
            
        </>
    )
}

export default FilmPage;