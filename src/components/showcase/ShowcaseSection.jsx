import React from 'react'

import './ShowcaseSection.css'
import img_backgroundlines from '../../assets/images/Rectangle 607.svg'
import img_headPic from '../../assets/images/Showcase-images.svg'
import Button from '../generic/Button'
import ButtonWhit from '../generic/ButtonWhit'

const ShowcaseSection = () => {
  return (
         <section className="showcase">
            <img className="background-linse" src={img_backgroundlines} alt="" /> 
            <div className="container">
                <div  className="content">
                    <h1>We Provide The Best Business Solutions</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                    <Button text='Get Consulting' url='/service/get-conlutting'/>
                    <ButtonWhit text='Learn More' url='/service/learn-more'/>
                </div>
                <img src={img_headPic} alt="en man som har en surfplata på handen" />
            </div>
        </section>
  )
}

export default ShowcaseSection