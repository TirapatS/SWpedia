import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

// Pages
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import PeoplePage from './pages/PeoplePage'

function App() {
    return (
        <div className="App">
            <nav>
                <h1>SWpedia</h1>
            </nav>
            <Routes>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/movie">
                    <MoviePage />
                </Route>
                <Route path="/people">
                    <PeoplePage />
                </Route>
            </Routes>
        </div>
    )
}