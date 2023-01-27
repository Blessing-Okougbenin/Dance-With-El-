import React from 'react'
import '../styles/eli.css'
import Elijah from '../../../asset/images/El.jpeg'


export default function Eli () {
    return(
        <div className={'el_div'}>
            <h1 className={'instructor'}>Instructor</h1>
            <div className={'elText_div'}>
                <img src={Elijah} className={'el'} alt={'El'}/>

                <h2 className={'el_name'}>Elijah Okougbenin <br/>(El D SI)</h2>
                <p className={'about_el'}>Is a professional dancer and instructor from Lagos Nigeria.
                    I started my dance career at the age of 10, <br/>had a whole lot of experience with different instructors,<br/>
                    but here comes the amazing part, I found myself learning different genre of dance. <br/>When I started it wasn't easy at all but
                    <br/>I was motivated by my instructor and other dancers around me.<br/>

                    Over time I grew in stature and in different skills of dance, <br/>I was proud of myself, because I didn't get all the support I
                    needed but never the less, <br/>I did not give up and here I am, I have Instructed In few dance academy and performed on several
                    LoveWorld international program.

                    El' Dance Class is a strategic and purposeful goal for dancers, follow me and let's Explore.
                </p>
            </div>
        </div>
    )
}