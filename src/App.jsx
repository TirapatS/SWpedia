import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar'
import './App.css'

// Pages
import HomePage from './pages/HomePage'

import FilmsPage from './pages/FilmsPage'
import FilmPage from './pages/FilmPage'

import PeoplesPage from './pages/PeoplesPage'
import PeoplePage from './pages/PeoplePage'

import NotFound from './pages/NotFound'

const App = () => {

    return (
        <div id="App">

            <Navbar />

            <Container className="py-3">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/film" element={<FilmsPage />}/>
                    <Route path="/film/:id" element={<FilmPage />}/>
                    <Route path="/people" element={<PeoplesPage />}/>
                    <Route path="/people/:id" element={<PeoplePage />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </Container>
        </div>
    )
}

export default App;