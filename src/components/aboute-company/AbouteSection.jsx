import React from 'react'

import './AbouteCompany.css'
import img_pic4 from '../../assets/images/pic4.svg'
import ButtonBlack from '../generic/ButtonBlack'

const AbouteSection = () => {
  return (
    <section  className="about-company-section">
            <div className="container">
                <div className="first-part">
                    <img src={img_pic4} alt=""/>
                    <div className="over-pic">  
                        <p><strong className="strong">Samantha Brown</strong><strong className="strong-1">Founder</strong></p>
                        <p className="text">
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        </p>
                    </div>
                </div>
                <div className="section-tittle">
                    <p>About Company</p>
                    <h2>We Are Business Consulting & Credit Repair Experts</h2>
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.
                    </p>
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>

                    <div className="play-btn">
                        <ButtonBlack text='learn More'  url='/servise/learn-more'/>
                        <i className="fa-solid fa-play play"> </i>
                        <p id="intro">Intro video</p>
                    </div>
                </div>
            </div>
        </section>

  )
}

export default AbouteSection