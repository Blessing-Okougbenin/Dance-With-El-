import * as React from "react";
import { Link } from "react-router-dom";
import '../styles/logIn.css'
import { useState } from "react";

export default function LogIn () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div className={"logIn"}>
            <form>
                <input className={"ff"}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder={"Email"}
                    type={"email"}
                    name={"email"}
                    required
                />

                <input className={"fff"}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder={"password"}
                    type={"password"}
                    name={"password"}
                    required
                />

            </form>

            <Link to={'/home'}>
                <button className={"btn_lgn"} type={"submit"}>Log In</button>
            </Link>
        </div>
    )
}