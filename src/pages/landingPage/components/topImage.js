import * as React from "react";
import '../styles/topImage.css'
import { Link } from 'react-router-dom'
import Ballerina from '../../../asset/images/ballerina.jpeg'


export default function TopImage () {

    return(
        <div className={'image_div'}>
            <img src={Ballerina} id={'lady'} alt={'man'}/>
        </div>
    )
}