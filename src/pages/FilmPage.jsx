import { useState, useEffect } from 'react'

import Spinner from 'react-bootstrap/Spinner'
import ListGroup from 'react-bootstrap/ListGroup'

import { Link, useParams } from 'react-router-dom'

import SWAPI from '../services/SW-API'

const FilmPage = () => {
    const [Film, setFilm] = useState()
	const { id } = useParams()
    const [loading, setLoading] = useState(false)

	const getFilm = async (id) => {
		const data = await SWAPI.getFilm(id)
		setFilm(data)
        console.log("got data", data)

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
                   
               </div>
           </div>
            
        </>
    )
}

export default FilmPage;