import * as React from "react";
import '../styles/title.css'
import { Link } from "react-router-dom";

export default function Title () {
    return(
        <div className={'titleText_div'}>
            <div className={'title_div'}>
                <Link to={'/home'} style={{textDecoration: 'none'}}>
                    <p className={'title'}>EL' DANCE CLASS</p>
                </Link>
            </div>

            <div className={'div_a'}></div>

            <div className={'div_b'}></div>
        </div>
    )
}