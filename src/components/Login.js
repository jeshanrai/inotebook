import React from 'react'

export default function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState(""); 
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle login logic here

    const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })   
 
    });
    const json = await response.json();
    console.log(json);
}
const onChange = (e) => {   
    if (e.target.id === "email") {
        setEmail(e.target.value);
    } else if (e.target.id === "password") {
        setPassword(e.target.value);
    }   
}
  return (
    <>
        <form className="container my-3" onClick={handleSubmit}>
            <h1>Login</h1>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" value={} className="form-control" id="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>   
      </form>
    </>
  )
}
