import React, {useState} from 'react';

const UseToggleState = () => {

    const [toggled, setToggle] = useState("true")

    const toggle = () => {
       if(toggled === "true") {
           setToggle("false");
       }else {
           setToggle("true");
       };
    }

   return (
       <>
       <h1> I am toggled {toggled}</h1>
       <button onClick={toggle}>Toggle me</button>
       </>
   )
}

export {UseToggleState};