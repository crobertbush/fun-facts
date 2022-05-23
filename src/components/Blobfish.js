import React from 'react'
import blobfish from '../img/blobfish.photo1.png'

const Blobfish = () => {
  return (
    <div className="container center">
        <h4 className="center">Blobfish</h4>
        <img src={blobfish} alt="img" />
        <ul>
          <li>Scientific Name: Psychrolutes marcidus</li>
          <br />
          <li>Despite this being a fish, it doesn't possess a swim bladder. This fish maintains it's buoyancy thanks to it's gelatinous body.</li>
          <br />
          <li>It doesn't always look like a blob! Lacking all bones aside from something that resembles a spine, the blobfish keeps it's shape thanks to the immense pressure of the ocean.</li>
        </ul>
    </div>
  )
}

export default Blobfish