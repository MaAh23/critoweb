import React from 'react'

import img_logo from '../../assets/images/logotype.svg'
import './LastSection.css'

const LastSection = () => {
  return (
    <section className="last-section">
            {/* <img  className="line" src="" alt=""> */}
            <div className="container">
                <div className="crito-logo">
                    <img src={img_logo} alt=""/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                </div>
                <div className="company">
                    <h3>company</h3>
                    <p>About</p>
                    <p>Feature</p>
                    <p>Works</p>
                    <p>career</p>
                </div>
                <div className="help">
                    <h3>help</h3>
                    <p>Customer Support</p>
                    <p>Delivery Details</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
                <div className="resources">
                    <h3>resources</h3>
                    <p>Free eBooks</p>
                    <p>Development Tutorial</p>
                    <p>How to - Blog</p>
                    <p>Youtube Playlist</p>
                </div>
                <div className="link">
                    <h3>link</h3>
                    <p>Free eBooks</p>
                    <p>Development Tutorial</p>
                    <p>How to - Blog</p>
                    <p>Youtube Playlist</p>
                </div>
            </div>
        </section>

  )
}

export default LastSection