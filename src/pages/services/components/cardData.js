import React from "react";
import Card from "./card";

import Ballerina from '../../../asset/images/ballerina.jpeg'
import MartialArtist from '../../../asset/images/martial.jpeg'
import Artist from '../../../asset/images/artist.jpg'

export default function CardData () {
    return(
        <section className={"card_list"}>
           <Card
                img={Artist}
                name={"Sophia A. (Artist)"}
           />

            <Card
                img={MartialArtist}
                name={"O'Back .J (Martial Art)"}
           />

            <Card
                img={Ballerina}
                name={"Cassy M.K (Ballerina)"}
           />
        </section>
    )
}