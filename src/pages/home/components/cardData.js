import React from "react";
import Card from "./card";

import BalletRexEd from '../../../asset/images/ballet-rex-ed.jpg'
import Salsa from '../../../asset/images/Salsa.jpg'
import UrbanKids from '../../../asset/images/Urban-kids.jpg'
import Afro from '../../../asset/images/Afro.jpg'

export default function CardData () {
    return(
        <section className={"card_list"}>
           <Card
                img={BalletRexEd}
                name={"Ballet Dance"}
                text={'A theatrical art form using dancing, music, and scenery to convey a story, theme, or atmosphere. \n' +
                    'Dancing in which conventional poses and steps are combined with light flowing figures (such as leaps and turns).'}
                price={'(#40,000)/per month.'}
           />

            <Card
                img={Salsa}
                name={"Salsa Dance"}
                text={'Salsa is a latin dance, associated with the music genre of the same name, which was first popularized in the United States in the 1960s in New York City. \n' +
                    'Salsa is a mixture of Cuban dances, such as mambo, pachanga and rumba, as well as American dances such as swing and tap.'}
                price={'(#35,000)/per month.'}
            />

            <Card
                img={UrbanKids}
                name={"Urban Dance"}
                text={'Urban Dance is a style of dance, community, and lifestyle revolving around choreographed pieces and performances by a dancer or groups of dancers. \n' +
                    'Choreography is influenced by several different dance styles, but is ultimately based on the choreographer\'s own interpretation of the music.\n'}
                price={'(#30,000)/per month.'}
            />

            <Card
                img={Afro}
                name={"Afro Dance"}
                text={'Afrobeats dance is a diverse and fascinating style originating predominantly form Sub-Saharan Africa. \n' +
                    'It is an evolution from traditional African dance styles following the creation of Afrobeats music.'}
                price={'(#30,000)/per month.'}
            />
        </section>
    )
}