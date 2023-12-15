import React from "react";

import { Link, usePage } from "@inertiajs/inertia-react";

export default function Layout({ children }) {
    const { auth } = usePage().props;

    return(
        <>
            <header>
                <div className="navbar navbar-expand-md navbar-dark fixed-top bg-dark border-bottom border-3" data-bs-theme="dark">
                    <div className="container">
                        <Link className="navbar-brand" href="/">Aptavis Ball</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" href="/">Klasemen</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/clubs/create">Tambah Klub</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">Tambah Skor</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container" style={{ marginTop: '100px' }}>
                { children }
            </main>
        </>
    );
};