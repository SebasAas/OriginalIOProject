import React from 'react';

// CSS
import 'assets/css/breadcrumb/Breadcrumb.css'

function Breadcrumb() {
  return (
    <div className="breadcrumb__wrapper">
      <ul className="breadcrumb__list">
        <li><a href="#">Home</a></li>
        <li>Sapatos</li>
      </ul>
    </div>
  )
}

export default Breadcrumb
