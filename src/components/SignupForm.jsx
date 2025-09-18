import React, { useState } from 'react';
import { signup } from '../services/userServices';
import { useNavigate } from 'react-router-dom';


export default function SignupForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await signup(email, password);

        if (success) {
            navigate("/private"); 
        } else {
            alert("User could not be registered");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-start min-vh-100 pt-5">
            <div className="card shadow-sm p-4" style={{ maxWidth: "400px", width: "100%" }}>
                <h2 className="text-center mb-4">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="signupEmail" className="form-label">Email address</label>
                        <input
                            type="email"
                            id="signupEmail"
                            className="form-control"
                            
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="signupPassword" className="form-label">Password</label>
                        <input
                            type="password"
                            id="signupPassword"
                            className="form-control"
                            
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}