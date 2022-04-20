import '../assets/style.css'

// Images
import MoviePoster from '../assets/images/sw-movie-poster.jpg'
import PeoplePoster from '../assets/images/sw-characters-poster.jpg'


// React Bootstrap imports
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

// React imports
import {Link} from 'react-router-dom'


const HomePage = () => {
    return (
        <>
            <Container fluid="md">
                <div className="choice-container">
                    <div className="d-flex justify-content-center">
                        <div className="mx-5 mt-5">
                            <div>
                                <Image src={MoviePoster} height={400}></Image>
                            </div>
                            <div className="mt-4 text-center">
                                <Button as={Link} to="/movie" variant="outline-light" size="md">
                                    Movies
                                </Button>
                            </div>
                        </div>

                        <div className="choice-container mx-5 mt-5">
                            <div className="mx-auto">
                                <Image src={PeoplePoster} height={400}></Image>
                            </div>
                            <div className="mt-4 text-center">
                                <Button as={Link} to="/people" variant="outline-light" size="md">
                                    Peoples
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default HomePage;