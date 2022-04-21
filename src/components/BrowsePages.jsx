import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

// Work in progress
const BrowsePage = () => {
	return (
        <div className="mt-3">
            <Button as={Link} to="" variant="secondary" size="md">
                Previous Page
            </Button>
            <Button as={Link} to="" variant="secondary" size="md">
                Next Page
            </Button>
        </div>
	)
}

export default BrowsePage