import React, { Suspense, Fragment } from "react";
import ReactDOM from "react-dom";
import "./Index.css";
import Login from "../components/instagram/Login/Login";
import Register from "./instagram/Register/Register";
import UserProfil from "./instagram/userProfil/UserProfil";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

export default function Index() {
    const history = createBrowserHistory();

    return (
        <Router history={history}>
            <div className="indexPage">
                <Routes>
                    <Route exact path="/" element={<Login />} />

                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/userProfil" element={<UserProfil />} />
                </Routes>
            </div>
        </Router>
    );
}
ReactDOM.render(
    <Suspense>
        <Index />
    </Suspense>,
    document.getElementById("app")
);
