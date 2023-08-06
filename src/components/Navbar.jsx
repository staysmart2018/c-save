import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">C - Save</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item my-3">
                                <Link className="nav-Link active mx-2" style={{"textDecoration":"none", "color":"white"}} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item my-3">
                                <Link className="nav-Link mx-2" style={{"textDecoration":"none", "color":"white"}} to="/compose">Compose</Link>
                            </li>
                            <li className="nav-item my-3">
                                <Link className="nav-Link mx-2" style={{"textDecoration":"none", "color":"white"}} to="/delete">Delete</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
