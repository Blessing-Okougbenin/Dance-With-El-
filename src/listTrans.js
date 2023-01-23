import React from "react";


const data = [
    {
        id: '1',
        title: 'Vanilla',
        description: 'Tastes nice and refreshing',
        price: '22.00'
    },
    {
        id: '2',
        title: 'Chocolate',
        description: 'Crunchy and sticky',
        price: '10.50'
    },
    {
        id: '3',
        title: 'cup cake',
        description: 'Nice flavour',
        price: '12.00'
    },
];


const topDeserts = data.map(dessert => {
    return {
        content: `${dessert.title} - ${dessert.description}`,
        price: dessert.price,
    }
})


function ListTrans () {
    console.log(topDeserts);
    return (
        <div>
            <h1>List Transformation</h1>
        </div>
    )
}
export default ListTrans