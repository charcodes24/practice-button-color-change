import React, { useState } from 'react'

import './Buttons.css'

const Buttons = () => {
    const [bold, setBold] = useState(true)

    function handleAClick() {
        setBold(true)
    }

    function handleBClick() {
      setBold(false);
    }

    console.log(bold)

    return (
      <div className="buttons">
        <button onClick={handleAClick} style={ bold ? { fontWeight: "bold" } : null}>
          A
        </button>
        <button onClick={handleBClick} style={ !bold ? { fontWeight: "bold" } : null}>
          B
        </button>
      </div>
    );
}

export default Buttons
