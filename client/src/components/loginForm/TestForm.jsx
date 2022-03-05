import React, { useState } from 'react';
import axios from 'axios';

const TestForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email)

        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }
            const { data } = await axios.post('http://localhost:3001/api/users/login', {
                email,
                password
            },
            config 
            );
            console.log(data)
        } catch (error) {
            console.log('error')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type='submit'>SUBMIT</button>
        </form>
    );
};

export default TestForm;