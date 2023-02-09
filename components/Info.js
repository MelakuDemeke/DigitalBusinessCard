import React from "react"
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer"

function Info() {
    return (
        <div className="info">
            <img src="https://avatars.githubusercontent.com/u/38818398?v=4" alt="img" />

            <h3>Melaku Demeke</h3>
            <p>Frontend Developer</p>
            <a href="_blank"><p>Melaku.et</p></a>
            <div className="info--buttons">
                <button className="info--email"><a href="mailto:melaku.demeke789@gmail.com"><i className="fa fa-envelope"></i></a> Email</button>
                <button className="info--linkedin"><a href="https://www.linkedin.com/in/melaku-demeke/"><i className="fab fa-linkedin fa-1x"></i></a> LinkedIn</button>
            </div>
            <About />
            <Interests />
            <Footer />
        </div>
    );
}

export default Info;