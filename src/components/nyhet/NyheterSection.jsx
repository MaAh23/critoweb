import React from 'react'

import './NyheterSection.css'


const NyheterSection = () => {
  return (
    <section className="nyheter">
    <div className="container">
        <h2>Get News Updates By Signup </h2>
        <form>
            <input type="text" placeholder="username@domain.com"/>
            <button className="btn-yellow">Subscribe <i className="fa-solid fa-arrow-up-right-dots fa-fade"></i></button>
        </form>
    </div>
    </section>
  )
}

export default NyheterSection