import React, { useState, useEffect } from "react";
import axios from 'axios';

function SWMovies2() {
    const [number, setNumber] = useState(1);
    const [movie, setMovie] = useState("");


    useEffect(() => {
        async function getData() {
            const response = await axios.get(`https://swapi.dev/api/films/${number}/`);
            setMovie(response.data);
        }
        getData();
    }, [number]);

    return (
        <div>
            <h1> Pick a movie</h1>
            <div class="form-group">
                <label for="Movies"></label>
                <select multiple class="custom-select" value={number} onChange={e => setNumber(e.target.value)} name="" id="">
                    <option selected>Pick a movie</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </div>

            <h1>Your selected Movie.</h1>
            <span>{movie.title}</span>
            <p>{movie.opening_crawl}</p>
        </div>
    )
}

export default SWMovies2;