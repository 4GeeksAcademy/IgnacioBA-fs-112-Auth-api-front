import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { login } from "../services/userServices.js";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        let isLogged = await login(email, password);
        console.log(isLogged);
        if (isLogged) {
            dispatch({ type: "LOGIN", payload: isLogged });
            navigate("/");
        }
    }

    return (
        <div className="container d-flex justify-content-center align-items-start min-vh-100 pt-5">
            <div className="card shadow-sm p-4" style={{ maxWidth: "400px", width: "100%" }}>
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="loginEmail" className="form-label">Email address</label>
                        <input
                            type="email"
                            id="loginEmail"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="loginPassword" className="form-label">Password</label>
                        <input
                            type="password"
                            id="loginPassword"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Login
                    </button>
                    <div className="text-center">
                        <span>¿No account? </span>
                        <button
                            type="button"
                            className="btn btn-link p-0"
                            onClick={() => navigate("/signup")}
                        >
                            Sign up first
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};