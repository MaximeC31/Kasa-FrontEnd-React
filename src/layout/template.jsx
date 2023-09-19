import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./template.css";

function Template() {
    return (
        <>
            <header>
                <Link to="./">
                    <img src="/public/logo192.png" alt="logo-kasa" />
                </Link>
                <nav>
                    <ul>
                        <li><Link to="./">Accueil</Link></li>
                        <li><Link to="./a-propos">À propos</Link></li>
                    </ul>
                </nav>
            </header>
            <Outlet />
            <footer>
                <p>test</p>
                <p>test</p>
                <p>test</p>
            </footer>
        </>
    )
};

export default Template;