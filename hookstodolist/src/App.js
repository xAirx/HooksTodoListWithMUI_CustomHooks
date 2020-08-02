import React from "react";
import "./css/style.css";
import Counter from "./ClassvsHooks/CounterClass";
import CounterHooks from "./ClassvsHooks/CounterHooks";
import {Toggler}  from './ClassvsHooks/Toggler.js';
import SimpleformHooks from "./ClassvsHooks/SimpleFormhooks";
export default function App() {
  return (
    <div className="App">
      <Counter />
      <CounterHooks />
      <Toggler/>
      <SimpleformHooks/>
    </div>
  );
}
