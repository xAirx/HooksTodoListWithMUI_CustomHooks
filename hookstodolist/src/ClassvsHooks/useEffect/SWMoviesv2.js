import React, { useState, useEffect } from "react";
import axios from 'axios';

function SWMovies2() {
    const [number, setNumber] = useState(1);
    const [movie, setMovie] = useState("");

  //// We can have mulitple UseEffects, we can have the below code run when a number changes.
    useEffect(() => {
        async function getData() {
            const response = await axios.get(`https://swapi.dev/api/films/${number}/`);
            // Updating statet with setMovie.
            setMovie(response.data);
            // When we update state with setMovie we are re-rendering the component
            // This triggers a re-render and useEffect runs again.
        }
        getData();
        // When we pass in a second argument, as a form of array.
        // Any number of pieces of data.
        // The data we pass in here tells useEffect to ONLY run when this data updates.
        // Then we avoid infinite loops and re-renders.
    }, [number]);
    ////// We an pass in another argument to the useeffect here, but we dont need it to be that long
/*     }, [number,year]); */

 //// We can have this code run when a year changes.
   /*  useEffect(() => {
        async function getData() {
            const response = await axios.get(`https://swapi.dev/api/films/${number}/`);
            setMovie(response.data);
        }
        getData();
    }, [year]); */

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