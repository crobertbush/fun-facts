import React from 'react'
import axolotl from '../img/axolotl.photo.jpg'

const Axolotl = () => {
  return (
    <div className="container center">
        <h4 className="center">Axolotl</h4>
        <img src={axolotl} alt="img" />
        <ul>
          <li>Scientific Name: Ambystoma mexicanum</li>
          <li>This species of salamander has both gills and lungs, but choose to live their entire life in water.</li>
          <li>Axolotls have an extraordinary regenerative ability. They are able to regrow bone, muscle, and skin from lost limbs. They are even capable of regrowing organs.</li>
        </ul>
    </div>
  )
}

export default Axolotl