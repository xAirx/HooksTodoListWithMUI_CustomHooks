import React, { useState } from "react";

function CounterHooks() {
  // Second passed value below is the incrementer for the useState
  /*   const [stateValue, updaterFn] = useState(initialStateValue);
   */

  const [count, IncrementCount] = useState(100);

  const Increment = () => IncrementCount(count + 1);

  return (
    <div>
      <h1>The count is: {count}</h1>
      <button onClick={Increment}>Add count </button>
    {/*   <button onClick={() => setCount(count+1)}>Add count </button> */}
    </div>
  );
}

export default CounterHooks;
