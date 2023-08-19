import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const MovieCard = ({ title, description = "No description" }) => {

    const handleClick = (title) => {
        alert(title)
    }


    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://picsum.photos/200/200" />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
            <Button variant="primary" onClick={
                ()=>  {
                    handleClick(title)
                }
            }
            >Primary</Button>
        </Card.Body>
    </Card>
    )
}

export default MovieCard