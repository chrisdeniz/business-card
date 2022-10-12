import React from "react";
import twitter from "./ims/twitter.png"
import facebook from "./ims/facebook.png"
import insta from "./ims/instagram.png"
import  github from "./ims/github.png"

export default function Footer () {
    return (
        <div className="footer-container">
            <img className="twitter" src={twitter} alt='twitter'></img>
            <img src={facebook} alt='facebook' className="facebook"></img>
            <img src={insta} alt= 'insta' className="insta"></img>
            <img  className="git" src = {github} alt ='github' ></img>
        </div>
    )
}