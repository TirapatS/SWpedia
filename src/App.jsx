import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar'
import './App.css'

// Pages
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import PeoplePage from './pages/PeoplePage'
import NotFound from './pages/NotFound'

const App = () => {

    return (
        <div id="App">

            <Navbar />

            <Container className="py-3">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/movie" element={<MoviePage />}/>
                    <Route path="/movie/:id" element={<MoviePage />}/>
                    <Route path="/people" element={<PeoplePage />}/>
                    <Route path="/people/:id" element={<PeoplePage />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </Container>
        </div>
    )
}

export default App;