import React from 'react'
import platypus from '../img/platypus.photo.jpg'

const Platypus = () => {
  return (
    <div className="container center">
        <h4 className="center">Platypus</h4>
        <img src={platypus} alt="img" />
        <ul>
          <li>Scientific Name: Ornithorhynchus anatinus</li>
          <li>Despite this being a mammal, females lay eggs, they have a bill & webbed feet resembling a duck, and males have venomous stingers on their hind legs.</li>
          <li>When first discovered by British explorers, people thought it a hoax. The general public believed someone had sewn together several different animals similar to the mythical jackelope.</li>
        </ul>
    </div>
  )
}

export default Platypus