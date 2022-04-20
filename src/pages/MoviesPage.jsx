import { useState, useEffect } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import SWAPI from '../services/SW-API'

import '../assets/style.css'

const MoviesPage = () => {
    const [movies, setMovies] = useState([])

    const getMovies = async () => {
        
        const data = await SWAPI.getMovies()

        setMovies(data.results)

        data.results.sort((a, b) => a.episode_id - b.episode_id)
    }
        useEffect(() =>{
            getMovies()
    }, [])

    return (
        <>
            <h1>Movies</h1> 

            {movies.length > 0 && (
                <ListGroup>
                    {movies.map(movie =>
                        <ListGroup.Item
                            action
                            as={Link}
                            key={movie.id}
                            to={`/movie/${movie.id}`}
                        >
                            {movie.title}
                            <p>Episode: {movie.episode_id}</p>
                        </ListGroup.Item>
                    )}
                </ListGroup>
            )}
        </>
    )
}

export default MoviesPage;