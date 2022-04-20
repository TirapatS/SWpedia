import axios from 'axios'

const BASE_URL = 'https://swapi.dev/api/'

const getMovies = async () => {
	const res = await axios.get(`${BASE_URL}/films`)
	return res.data
}

/**
 * Get a single Movie
 */
const getMovie = async (id) => {
	const res = await axios.get(`${BASE_URL}/films/${id}`)
	return res.data
}

const getPeoples = async () => {
	const res = await axios.get(`${BASE_URL}/peoples`)
	return res.data
}

/**
 * Get a single People
 */
const getPeople = async (id) => {
	const res = await axios.get(`${BASE_URL}/peoples/${id}`)
	return res.data
}

export default {
	getMovies,
    getMovie,
    getPeoples,
    getPeople
}