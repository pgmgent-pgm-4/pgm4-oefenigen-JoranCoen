import React, { useState } from 'react';

export default function Kleuren() {
    const [kleuren, setKleuren] = useState(['red', 'green', 'blue']);

    function generateRandomColor() {
        const possibleColors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black', 'white'];
        return possibleColors[Math.floor(Math.random() * possibleColors.length)];
    }

    function addRandomColor() {
        const newColor = generateRandomColor();
        setKleuren(prev=> [...prev, newColor]);
    }

    function removeColor(colorToRemove) {
        setKleuren(prev => prev.filter(color => color !== colorToRemove));
    }

    return (
        <div>
            <h1>ColorList</h1>
            <ul>
                {kleuren.map((color, index) => (
                    <li key={index}>
                        {color} <button onClick={() => removeColor(color)}>delete</button>
                    </li>
                ))}
            </ul>
            <button onClick={addRandomColor}>Add random color</button>
        </div>
    );
}
