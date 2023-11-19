import React from 'react'

import './ServiceSection.css'
import ButtonBlack from '../generic/ButtonBlack'

const ServiseSection = () => {
  return (
    <section className="service">
            <div className="container">
                <div className="section-tittle">
                    <p>Our Services</p>
                    <h2>We Provide The Best Service For Consulting</h2>
                </div>
                <div className="parent-box">
                    <div className="child-box">
                        <h3>Business Advice</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div className="i-positin">
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    <div className="child-box secend">
                        <h3>Startup Business</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div className="i-positin">
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    <div className="child-box">
                        <h3>Financial Advice</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div className="i-positin">
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    <div className="child-box">
                        <h3>Risk Management</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div className="i-positin">
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div className="center-content">
                    <ButtonBlack text='Browse Services'/>
                </div>
            </div>
        </section>
  )
}

export default ServiseSection