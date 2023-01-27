import React from 'react'
import TopImage from "./topImage";
import Eli from './eli'
import Title from "./title";

export default function LandPage () {
    return(
        <div className={'landing_page'}>
            <TopImage/>
            <Eli/>
            <Title/>
        </div>
    )
}