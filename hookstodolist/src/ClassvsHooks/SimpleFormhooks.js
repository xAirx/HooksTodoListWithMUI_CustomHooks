import React, {useState} from 'react';
import useUpdate from './CustomFormUpdate';

export default function SimpleformHooks() {

    // Gives us access to email, and setEmail, when we use our custom hook, we will use.
    //"state" and "setState"
    const [email, testEmail,ResetEmail,updateEmail] = useUpdate("");
    const [password, testPassword,ResetPassword,updatePassword] = useUpdate("");

   /*  const handleChange = (e) => {
        setEmail(e.target.value)
    } */

    return (
        <>
        <h1> the email is.... {email}</h1>
        <input  type="text" value={email} onChange={updateEmail} />
        <button onClick={() => testEmail("")}>Test Email</button>
        <button onClick={() => ResetEmail("")}>ResetEmail</button>
        <h1> the password is.... {password}</h1>

        <input  type="text" value={password} onChange={updatePassword} />
        <button onClick={() => testPassword("")}>Test Password</button>
        <button onClick={() => ResetPassword("")}>ResetPassword</button>
        </>
    );
}