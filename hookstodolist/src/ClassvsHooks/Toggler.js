import React, {useState} from 'react';
import useToggle from './CustomuseToggle';


const Toggler = () => {
    const [isHappy, toggleIsHappy] = useToggle(false);
    const [isInLove, toggleInLove] = useToggle(true);

return (
    <>
    <button onClick={toggleIsHappy}>{isHappy ?  "😁" : "😰"}</button>
    <button onClick={toggleInLove}>{isInLove ? "😍" : "🥶"}</button>
    </>
)
/* ()=> setIsHappy(!isHappy)}>{isHappy ? "happy" : "sad"}</button>  */
}

export {Toggler};




/*  const UseToggleState = () => {

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

export {UseToggleState}; */
