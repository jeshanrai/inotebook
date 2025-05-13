import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login(props) {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: credentials.email,
                    password: credentials.password
                })
            });

            const json = await response.json();
            console.log(json);

            // Optional: handle response (e.g., token storage, redirect)
            if (response.ok) {
                alert("Login successful!");
               localStorage.setItem("token", json.authToken);
             navigate("/home");
            props.showAlert("Logged in successfully", "success");
            }
        } catch (err) {
            props.showAlert("Something went wrong.", "danger");
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <form className="container my-3" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                    type="email"
                    name="email"
                    value={credentials.email}
                    onChange={onChange}
                    className="form-control"
                    id="email"
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={onChange}
                    className="form-control"
                    id="password"
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}


