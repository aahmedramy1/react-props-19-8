import   MovieCard   from "./MovieCard";
import Button from 'react-bootstrap/Button';

const movies = [
    {
        id: 1,
        title: "The Godfather",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    },
    {
        id: 2,
        title: "The Shawshank Redemption",
        description:  "Test"
    },
    {
        id: 3,
        title: "Schindler's List",
        description: "ddddd"
    },
    {
        id: 4,
        title: "Raging Bull",
        description: "dddd"
    },
    {
        id: 5,
        title: "Casablanca",
    },
    {
        id: 6,
        title: "Citizen Kane",
        description: "dddd"
    }
]

const MoviesList = () => {
    return(<div style={{display:"flex", flexWrap: 'wrap', justifyContent: "center", gap: "3rem"}}>
        {
           movies.map( (movie) => {
               return (
                   <MovieCard
                       title={movie.title}
                       description ={movie.description}
                       key={movie.id}
                   />
               )} )
        }
    </div>)
}

export default MoviesList