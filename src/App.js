import React from 'react';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import './App.css';
import Project from "./Project/Project";
import Slogan from "./Slogan/Slogan";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";


function App() {
    return (
        <div className="App">
            <div className="portfolio">
                <Header/>

                <Main/>
                <Skills/>
                <Project/>
                <Slogan/>
                <Contacts/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
