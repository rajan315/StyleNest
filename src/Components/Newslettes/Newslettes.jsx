import React from 'react'
import './Newsletters.css'
const Newslettes = () => {
  return (
    <div className='newsletter'>
          <h1>GET EXCLUTIVE OFFERS ON YOUR MAIL</h1>
          <p>Subscribe to our newsletter and stay updated!</p>
          <div>
              <input type="email" placeholder='Email' />
                <button>Subscribe</button>
          </div>
    </div>
  )
}

export default Newslettes
