import React, { useState, useEffect } from "react";

export function useFetch(uri) {
  const [data, setMovie] = useState(uri);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const testMovie = "testMovie";
  const testuri = uri;

  useEffect(() => {
    /*   if (!uri) return (console.log("no movie")); */
    fetch("https://swapi.dev/api/films/" + uri)
      .then(data => data.json())
      .then(setMovie)
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri]);

  return [
    data,
    loading,
    error,
    testMovie,
    testuri
  ]
}