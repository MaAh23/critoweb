import React from 'react'

import './FeatureSection.css'
import Button from '../generic/Button'

const FeatureSection = () => {
  return (
    <section className="feature">
            <div className="container">
                <div className="section-tittle">
                    <p>Features</p>
                    <h2>Our Accounting is trusted by thousand of companies</h2>
                    <Button  text='Learn More'/>
                </div>
                <div className="wrapper">
                    <div>
                        <i className="fa-regular fa-handshake fa-fade"></i>
                        <h3>Business Advice</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div>
                        <i className="fa-regular fa-lightbulb fa-fade"></i>
                        <h3>Startup Business</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div>
                        <i className="fa-solid fa-arrow-up-right-dots fa-fade"></i>
                        <h3>Financial Advice</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div>
                        <i className="fa-solid fa-box-open - fa-fade"></i>
                        <h3>Risk Management</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default FeatureSection