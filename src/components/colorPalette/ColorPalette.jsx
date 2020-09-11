import React from 'react';

// CSS
import 'assets/css/colorPalette/ColorPalette.css';

function ColorPalette({ colors }) {

  return (
    Object.entries(colors).map(color => (
      <div key={color[1]} style={{ backgroundColor: color[1] }} className="color__palette__mini__wrapper"></div>
    ))
    // <div className="color__palette__colors" style={{ backgroundColor: color[1] }}></div>
  )
}

export default ColorPalette;