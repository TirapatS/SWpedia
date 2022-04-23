
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from 'react-router-dom'

import Image from 'react-bootstrap/Image'
import Yoda from '../assets/images/yoda.png'

const Navigation = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">
					<h1>SWpedia</h1>
					<p>May the force be with you</p>
				</Navbar.Brand>
					
				<Nav>
					<Nav.Link as={NavLink} end to="/">
						<u><h3>Home</h3></u>
						</Nav.Link>
						<Image src={Yoda} height="50"></Image>	
				</Nav>
			</Container>
		</Navbar>
	)
}

export default Navigation