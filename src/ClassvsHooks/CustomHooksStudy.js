import React, {useState, useEffect} from 'react';

function FriendStatus(props) {
    // State
    const [isOnline, setIsOnline] = useState(null);
    //Useeffect runs each render of component.
    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }
        ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
        return () => {
            //CLEANUP
            ChatAPI.unsubscribeFromFriendStatus(props.friend.id,  handleStatusChange);
        }
    });

    if (isOnline == null) {
        return 'Loading....';
    }
    return isOnline ? 'Online' : 'Offline';
}


// Now lets say that our chat applciation also has a contact list, and we want to render names of online
// users with a green color, we would copy and paste similar logic above into our friendlistitem component.
// instead we would like to share this logic between  our both proposed components friendstatus and friendlistitem

// Traditionally in react we had to ways to share stateful logic between components, render props and higher order components.
// Hooks solves the issues and replaces these methods.


/////////////// Extracting a custom hook. /////////////////

/* When we want to share logic between two JS functions, we extract it to a third function.
 */// Both components and hooks are functions so this will work too.

// A custom hook is a JS function whose name starts with USE and that may call other hooks.

// useFriendStatus is our fist custom hook below:


import { useState, useEffect } from 'react';

function useFriendStatus(friendID) {  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}


/*
There’s nothing new inside of it — the logic is copied from the components above. Just like in a component, make sure to only call other Hooks unconditionally at the top level of your custom Hook.

Unlike a React component, a custom Hook doesn’t need to have a specific signature. We can decide what it takes as arguments, and what, if anything, it should return. In other words, it’s just like a normal function. Its name should always start with use so that you can tell at a glance that the rules of Hooks apply to it.

The purpose of our useFriendStatus Hook is to subscribe us to a friend’s status. This is why it takes friendID as an argument, and returns whether this friend is online: */

function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);

    // ...

    return isOnline;
  }



 //////////////////*   Now let’s see how we can use our custom Hook. */ /////////////////


function FriendStatus(props) {
    const isOnline = useFriendStatus(props.friend.id);
    if (isOnline === null) {
      return 'Loading...';
    }
    return isOnline ? 'Online' : 'Offline';
  }

  function FriendListItem(props) {
    const isOnline = useFriendStatus(props.friend.id);
    return (
      <li style={{ color: isOnline ? 'green' : 'black' }}>
        {props.friend.name}
      </li>
    );
  }

/*   Is this code equivalent to the original examples? Yes, it works in exactly
 the same way. If you look closely, you’ll notice we didn’t make any changes to the behavior.
  All we did was to extract some common code between two functions into a separate function.
  Custom Hooks are a convention
 */

// Each call to a hook gets isolated state, from reacts point of view a component just
// calls useState and useEffect.
// As we learned earlier we can call useState and useEffect many times in one single component.
// They will all be independent.
