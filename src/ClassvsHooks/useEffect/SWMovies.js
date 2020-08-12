import React, {useState, useEffect} from "react";
import {useFetch} from './CustomFetch'

function SWMovies() {

    const [selectedMovie, setSelectedMovie] = useState("");
    ////////////////////////////////////////////////////////////////////////////////////////////
    const [data,loading,error,testMovie,testuri] = useFetch(selectedMovie)

  /*    useEffect(() => {

     });
 */

    const selectMovie = (e) => {
        let selectedMovie = e.target.value
        // Settitng the State is important when working with hooks, else its just temporary.
        setSelectedMovie(selectedMovie);
        logmovie(selectedMovie);
        ///////////////////////
        return selectedMovie
    }

        const logmovie = (selectedMovie) => {
            console.log("this is the selected movie from dropdown", selectedMovie)
            ///////////////////////
            console.log("this is the testmovie",testMovie)
            ///////////////////////
            console.log("this is the data", data);
            //////////////////////
            console.log("this is the URI", testuri)
            ////////////////////////////////////////////////////////////////////////////////////////////
            let isLoading = loading ? console.log(`We are loading ${loading}`) : console.log("we are done loading data");

            ////////////////////////////////////////////////////////////////////////////////////////////
             let isError = error ? console.log(`This is the error ${error}`) : console.log("There are no errors");

        };




    return (
        <div>
            <h1> Pick a movie</h1>
            <div class="form-group">
              <label for="Movies"></label>
              <select multiple class="custom-select" onChange={selectMovie} name="" id="">
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
        <span>{data.title}</span>
        </div>
    );
}

export default SWMovies;