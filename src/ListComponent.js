import React from "react";

const topDesserts = [
    {
        id: '1',
        title: 'Orange',
        description: 'Sweet and has Vitamin A',
        price: '2.00'
    },
    {
        id: '2',
        title: 'Apple',
        description: 'Mouth pleasing and fresh',
        price: '4.00'
    },
    {
        id: '3',
        title: 'Banana',
        description: 'Long and Reach',
        price: '2.50'
    },
];

export default function ListComponent(){
    const listItem = topDesserts.map(dessert => {
        const listText = `${dessert.title} - ${dessert.description}`
        return <li>{listText}</li>
    })
    return(
        <div>
            <ul>
                {listItem}
            </ul>
        </div>
    )
}