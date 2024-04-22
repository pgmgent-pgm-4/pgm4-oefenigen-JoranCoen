import react, { useState } from 'react';

export default function MessageToggle() {
    const [showMessage, setShowMessage] = useState(false);
    return (
    <button onClick={() => setShowMessage(!showMessage)}>
        {showMessage ? 'Verstopt' : 'Hallo ik ben joran'} 
    </button>
    );
}