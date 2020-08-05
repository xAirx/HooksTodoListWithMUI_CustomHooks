import React from "react";
import "./css/style.css";
import Counter from "./ClassvsHooks/Counter/CounterClass";
import CounterHooks from "./ClassvsHooks/Counter/CounterHooks";
import {Toggler}  from './ClassvsHooks//Toggler/Toggler';
import SimpleformHooks from "./ClassvsHooks/Form/SimpleFormhooks";
import Clicker from "./ClassvsHooks/useEffect/Clicker";
import SWMovies from "./ClassvsHooks/useEffect/SWMovies";
import SWMovies2 from "./ClassvsHooks/useEffect/SWMoviesv2";
import TodoApp from "./TodoApp"

export default function App() {
  return (
    <div className="App">
      <TodoApp />
     {/*  <Counter />
      <CounterHooks />
      <Toggler/>
      <SimpleformHooks/>
      <Clicker />
      <SWMovies />
      <SWMovies2 /> */}
    </div>
  );
}
