import React from "react";
import '../styles/hero.css'
import BalletKids from '../../../asset/images/ballet-rex-ed.jpg'
import SalsaBatchata from '../../../asset/images/Urban2.jpg'
import DancingWoman from '../../../asset/images/artist.jpg'
import WomenDancingContemporary from '../../../asset/images/Urban2.jpg'

export default function Hero () {
    return(
        <div className={"hero"}>
            <div className={'line_one'}>
                <div className={'ballet_kids_div'}>
                    <img className={'ballet_kids_img'} src={BalletKids} alt={'Ballet_kids'}/>

                    <p className={'ballet_kids_text'}>Have your kids do the best while they can, Such investment is of a lifetime.
                        In our modern day today, several reasons our parent want their
                        offspring to explore different art-motivated activities.
                        The very first reason is for the good mental health of the child, it keeps them smart and effective at all time.
                    </p>
                </div>

                <div className={'batchata_div'}>
                    <img className={'batchata_img'} src={SalsaBatchata} alt={'salsa'}/>

                    <p className={'batchata_text'}>Have your kids do the best while they can, Such investment is of a lifetime.
                        In our modern day today, several reasons our parent want their
                        offspring to explore different art-motivated activities.
                        The very first reason is for the good mental health of the child, it keeps them smart and effective at all time.
                    </p>
                </div>
            </div>

            <div className={'line_two'}>
                <div className={'dancingWoman_div'}>
                    <img className={'dancingWoman_img'} src={DancingWoman} alt={'salsa'}/>

                    <p className={'dancingWoman_text'}>Have your kids do the best while they can, Such investment is of a lifetime.
                        In our modern day today, several reasons our parent want their
                        offspring to explore different art-motivated activities.
                        The very first reason is for the good mental health of the child, it keeps them smart and effective at all time.
                    </p>
                </div>

                <div className={'WomenDancingContemporary_div'}>
                    <img className={'WomenDancingContemporary_img'} src={WomenDancingContemporary} alt={'salsa'}/>

                    <p className={'WomenDancingContemporary_text'}>Have your kids do the best while they can, Such investment is of a lifetime.
                        In our modern day today, several reasons our parent want their
                        offspring to explore different art-motivated activities.
                        The very first reason is for the good mental health of the child, it keeps them smart and effective at all time.
                    </p>
                </div>

            </div>
            <h1 id={'ourServices'}>OUR SERVICES</h1>
        </div>
    )
}