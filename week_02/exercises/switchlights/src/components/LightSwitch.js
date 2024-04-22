import React, { useState } from "react";

export default function LightSwitch() {
    const [lightsOn, setLightsOn] = useState(false);

    const divStyle = {
        height: '100vh', 
        width: '100vw',   
        backgroundColor: lightsOn ? 'purple' : 'black', 
        color: lightsOn ? 'black' : 'white', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px'
    };

    return (
        <div style={divStyle}>
            <button onClick={() => setLightsOn(!lightsOn)}>
                {lightsOn ? 'Turn off' : 'Turn on'}
            </button>
        </div>
    );
}
