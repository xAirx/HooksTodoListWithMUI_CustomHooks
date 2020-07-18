import React from "react";
import "./css/style.css";
import Counter from "./ClassvsHooks/CounterClass";
import CounterHooks from "./ClassvsHooks/CounterHooks";
import {UseToggleState,Toggler}  from './ClassvsHooks/CustomUseToggleState';
export default function App() {
  return (
    <div className="App">
      <Counter />
      <CounterHooks />
      <UseToggleState />
      <Toggler/>
    </div>
  );
}
