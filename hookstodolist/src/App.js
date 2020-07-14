import React from "react";
import "./styles.css";
import Counter from "./CounterClass";
import CounterHooks from "./CounterHooks";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <CounterHooks />
    </div>
  );
}
