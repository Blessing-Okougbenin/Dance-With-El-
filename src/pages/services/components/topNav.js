import React from 'react';
import '../styles/topNav.css'
import { HashLink as Link } from 'react-router-hash-link'

export default function TopNav () {
    return(
        <div className={"topNav"}>
            <div className={"logo"}>
                <div className={"o"}></div>
                <div className={"n"}></div>
                <div className={"e"}></div>
                <div className={"i"}></div>
            </div>

            <div className={"nav"}>
                <p>Experience</p>
                <p>Service</p>
                <p>About Us</p>
            </div>

            <Link to={'#footer'}>
                <button className={"signUp"}>Sign Up</button>
            </Link>
        </div>
    )
}