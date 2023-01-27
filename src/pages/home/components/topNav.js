import React from 'react';
import '../styles/topNav.css'
import { HashLink as Link } from 'react-router-hash-link'

export default function TopNav () {
    return(
        <div className={"topNav"}>
            <div className={"logo"}>
                <Link to={'/'}>
                    <div className={"o"}></div>
                    <div className={"e"}></div>
                    <div className={"i"}></div>
                    <div className={"n"}></div>
                </Link>
            </div>

            <div className={"nav"}>
                <Link className={'resources'} style={{textDecoration: 'none'}}>Resources</Link>

                <Link to={'#ourServices'} className={'service'} style={{textDecoration: 'none'}}>Service</Link>


                <Link className={'aboutUs'} style={{textDecoration: 'none'}}>About Us</Link>
            </div>

            <Link to={'#footer'}>
                <button className={"signUp"}>Sign Up</button>
            </Link>
        </div>
    )
}