import * as React from "react";
import '../styles/button.css'
import { Link } from 'react-router-dom'


export default function Button () {

    return(
        <div className={'home'}>

            <Link to={"/home"}>
                <button className={"clickMe"}>CLick <span id={"me"}>Me</span></button>
            </Link>
        </div>
    )
}