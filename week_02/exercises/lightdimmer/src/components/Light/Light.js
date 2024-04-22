import React, { useState } from "react";

export default function Light() {
    const [opacity, setOpacity] = useState(1);

    const divStyle = {
        height: '100vh',
        width: '100vw',
        backgroundColor: `rgba(155, 155, 155, ${opacity})`,
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px'
    };

    const handleOpacityChange = (event) => {
        setOpacity(event.target.value);
    };

    return (
        <div style={divStyle}>
            <div>
                <label>
                    Adjust Opacity:
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={opacity}
                        onChange={handleOpacityChange}
                    />
                </label>
            </div>
        </div>
    );
}
