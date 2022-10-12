import React from "react";
import email from "./ims/mail.png"
import linked from "./ims/linkedin.png"
export default function Icons(){
    return (
        <div className="icons-container">
        <div className="email-container">
            <img className="email-icon" src={email}alt='mail'></img>
            <h5 className="email">Email</h5>
        </div>
        <div className="linked-in">
        <img className="linkedin-icon" src={linked}alt='linkedin'></img>
        <h5 className="linkedin">LinkedIn</h5>
    </div>
    </div>
    )
}