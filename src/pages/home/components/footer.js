import * as React from "react";
import { Link } from "react-router-dom";
import '../styles/footer.css'
import { useState } from "react";

export default function Footer () {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    return(
        <div id={"footer"}>

            {/*<form action={"https://formbold.com/s/FORM_ID"} method={"POST"}>*/}
            {/*    <input*/}
            {/*        value={firstName}*/}
            {/*        onChange={e => setFirstName(e.target.value)}*/}
            {/*        placeholder={"First Name"}*/}
            {/*        type={"text"}*/}
            {/*        name={"firstName"}*/}
            {/*        required*/}
            {/*    />*/}

            {/*    <input*/}
            {/*        value={lastName}*/}
            {/*        onChange={e => setLastName(e.target.value)}*/}
            {/*        placeholder={"Last Name"}*/}
            {/*        type={"text"}*/}
            {/*        name={"lastName"}*/}
            {/*        required*/}
            {/*    />*/}

            {/*    <input*/}
            {/*        value={email}*/}
            {/*        onChange={e => setEmail(e.target.value)}*/}
            {/*        placeholder={"Email"}*/}
            {/*        type={"email"}*/}
            {/*        name={"email"}*/}
            {/*        required*/}
            {/*    />*/}

            {/*    <input*/}
            {/*        value={phone}*/}
            {/*        onChange={e => setPhone(e.target.value)}*/}
            {/*        placeholder={"(319) 555-0115"}*/}
            {/*        type={"tel"}*/}
            {/*        name={"phone"}*/}
            {/*        required*/}
            {/*    />*/}

            {/*    <textarea*/}
            {/*        rows={5}*/}
            {/*        cols={25}*/}
            {/*        id={"textId"}*/}
            {/*        name={"message"}*/}
            {/*        value={message}*/}
            {/*        onChange={e => setMessage(e.target.value)}*/}
            {/*        maxLength={200}*/}
            {/*        placeholder={"why choose your talent?..."}*/}
            {/*        required*/}
            {/*    />*/}

            {/*    <button className={"btn"} type={"submit"}>Sign Up</button>*/}
            {/*</form>*/}

            {/*<div className={"already_have_an_account"}>*/}

            {/*        <p className={"already"}>already have an account?*/}
            {/*            <Link to={'/log-in'}>*/}
            {/*                <a id={"log_in"}>Log In</a>*/}
            {/*            </Link>*/}
            {/*        </p>*/}

            {/*</div>*/}

        </div>
    )
}