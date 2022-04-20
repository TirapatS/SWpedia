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

            <Container className="py-3">
                <Routes>
                    <Route exact path="/">element={<HomePage />}</Route>
                    <Route path="/movie">element={<MoviePage />}</Route>
                    <Route path="/movie/:id">element={<MoviePage />}</Route>
                    <Route path="/people">element={<PeoplePage />}</Route>
                    <Route path="/people/:id">element={<PeoplePage />}</Route>
                </Routes>
            </Container>
        </div>
    )
}

export default App;