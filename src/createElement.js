import React from 'react';

//How to use create Element in Reactjs

export default function CreateElement() {
    return React.createElement("h1",
        { className: "bg-secondary text-white text-center p-2" },
        "Hello World");
}