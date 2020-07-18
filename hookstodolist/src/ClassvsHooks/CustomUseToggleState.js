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



const Toggler = () => {
    const [isHappy, setIsHappy] = useState(false);
    const [isInLove, setInLove] = useState(true);

    const toggleHappy = () => {
        setIsHappy(!isHappy);
    }
    const toggleLove = () => {
        setInLove(!isInLove);
    }

return (
    <>
    <button onClick={toggleHappy}>{isHappy ?  "😁" : "😰"}</button>
    <button onClick={toggleLove}>{isInLove ? "😍" : "🥶"}</button>
    </>
)
/* ()=> setIsHappy(!isHappy)}>{isHappy ? "happy" : "sad"}</button>  */
}

export {Toggler};