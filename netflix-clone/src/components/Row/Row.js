import Card from "../card/Card"
import axios from 'axios'
import { useState, useEffect } from "react"
import './Row.css'
export default function Row(props) {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const response = await axios.get(props.url);
        setMovies(response.data.results);
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div className='row-wrapper'>
            <h3 className='row-title'>{props.title}</h3>
            <div className='row-card'>
                {movies.map((el) => {
                    console.log(el)
                    return <Card title={el.title} poster={el.backdrop_path} />;
                })}
            </div>

        </div>
    )
}
