import { useState, useEffect } from 'react'

import ListGroup from 'react-bootstrap/ListGroup'
import Spinner from 'react-bootstrap/Spinner'

import { Link } from 'react-router-dom'

import SWAPI from '../services/SW-API'

import getIdFromUrl from '../helpers/index'


import '../assets/style.css'

const FilmsPage = () => {
    const [Films, setFilms] = useState([])
    const [loading, setLoading] = useState(false)

    const getFilms = async () => {

        const data = await SWAPI.getFilms()

        setFilms(data.results)

        setLoading(true)

    }
        useEffect(() =>{
            getFilms()
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
            <h1 className="mb-3">Films</h1> 

            {Films.length > 0 && (
    
                <ListGroup>
                    {Films.map(film =>
                        <ListGroup.Item
                            action
                            as={Link}
                            key={getIdFromUrl(film.url)}
                            to={`/films/${getIdFromUrl(film.url)}`}
                        >
                            <h4>{film.title}</h4>
                            <p><strong>Episode:</strong> {film.episode_id}</p>
                            <p><strong>Released:</strong> {film.release_date}</p>
                            <p><strong>Includes:</strong> {film.characters.length} characters</p>
                        </ListGroup.Item>
                    )}
                </ListGroup>
            )}
        </>
    )
}

export default FilmsPage;