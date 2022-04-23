import axios from 'axios'

const BASE_URL = 'https://swapi.dev/api'

const getFilms = async () => {
	const res = await axios.get(`${BASE_URL}/films`)
	return res.data
}

/**
 * Get a single Film
 */
const getFilm = async (id) => {
	const res = await axios.get(`${BASE_URL}/films/${id}`)
	return res.data
}

const getPeoples = async (page) => {
	const res = await axios.get(`${BASE_URL}/people/?page=${page}`)
	return res.data
}

/**
 * Get a single People
 */
const getPeople = async (id) => {
	const res = await axios.get(`${BASE_URL}/people/${id}`)
	return res.data
}
// eslint-disable-next-line
export default {
	getFilms,
    getFilm,
    getPeoples,
    getPeople
}