import * as React from "react";
import '../styles/card.css'
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from 'axios';

export default function Card (props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getData = async () => {

            try {
                const response = await axios.get(`https://api.kanye.rest/`,{
                    header:{'Content-Type':'application/json', 'Allow-Headers':'Cors'}
                });

                setData(response.data.quote);
                setError(null)
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false)
            }
        };
        getData();
    }, []);

    return(
        <div className={"cards"}>

            {loading && <div>Getting your info...</div>}
            {error && (
            <p className={"error"}>{`There is a problem fetching your quotes. - ${error}`}</p>
             )}
            <div className={"card"}>
                <img className={"image"} src={props.img}  alt={"artist"}/>
                <p className={"name"}>{props.name}</p>
                <p className={'price'}>{props.price}</p>

                <a href={'https://docs.google.com/forms/d/1brPIx0hkoHdPKUovVB3A1uikoZyqRQfd2su398r1xIs/edit'} target={'_blank'}>
                    <button className={'register'}>Register</button>
                </a>
                <p className={"text"}>{props.text}</p>



                {/*<p className={'data'}>*/}
                {/*{data && data}*/}
                {/*</p>*/}
            </div>
        </div>
    );
}