// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from './components/Footer';
import Posts from "./components/Posts";
import Navbar from "./components/BlogNav";
import ContactUs from "./components/ContactUs"; //  Import ContactUs page

const App = () => {
    return (
        <Router>
            <div className="main-container" style={{ backgroundColor: "aliceblue" }}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Posts />} />
                    <Route path="/contact" element={<ContactUs />} /> {/*  Route added */}
                </Routes>
            </div>
            <Footer/>

        </Router>
    );
};

export default App;
