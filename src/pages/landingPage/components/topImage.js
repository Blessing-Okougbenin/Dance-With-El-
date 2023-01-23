import * as React from "react";
import '../styles/topImage.css'
import { Link } from 'react-router-dom'
import Scottish from '../../../asset/images/Scottish_Ballet-800x445.png'


export default function TopImage () {

    return(
        <div className={'image_div'}>
            <img src={Scottish} id={'man'} alt={'man'}/>
        </div>
    )
}