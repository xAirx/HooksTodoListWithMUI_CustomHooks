import React, { useState, useEffect} from "react";

function Clicker() {

    const [count, setCount] = useState(0);

  /*   let test = document.createElement("div"); */
    let currentDiv = document.querySelector("#div1");
   /*  document.body.before(test,currentDiv); */

    useEffect(() => {
        let currentDiv = document.querySelector("#div1");
        /* let content = document.createTextNode(`You clicked ${count} times`); */
        currentDiv.innerHTML = `${count}`;

    });

    // Sideeffect after count, we do the state and a callbaci function.
    // When we use useState and hooks we cant do this like we would in standard class components.
    // setState({count: count+1}, function())

    // State updates from the useState and useReducer hooks dont support the second callback argument.


   /*  ::::Not possible:::: */

    /* <button onClick={()=>setCount(count+1, function() {console.log("after")})} */

    /* :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

    /* Instead we will have to use useEffect, to use any lifecycle hooks, useEffect will run after EACH render of the component.
    A render happens when we update our state. */




    return (
        <>
        <h1>Clicker</h1>
        <div id="div1"></div>
        <button onClick={() => setCount(count+1)}>Increase count {count}</button>
        </>
    )
}

export default Clicker;
