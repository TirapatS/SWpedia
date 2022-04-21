
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from 'react-router-dom'

const Navigation = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">
					<h1>SWpedia</h1>
					<p>May the force be with you</p>
				</Navbar.Brand>
					
				<Nav>
					<Nav.Link as={NavLink} end to="/"><u><h3>Home</h3></u></Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	)
}

export default Navigation