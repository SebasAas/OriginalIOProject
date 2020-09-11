import React from 'react';

// CSS
import 'assets/css/button/Button.css';

function Button({ text, setPadding }) {

  return (
    <button className="button__style" style={{ padding: setPadding }}>
      {text}
    </button>
  )
}

export default Button
