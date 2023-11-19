import React from 'react'

import './PartnerSection.css'
import img_paperz from '../../assets/images/paperz.svg'
import img_dorfus from '../../assets/images/dorfus.svg'
import img_martino from '../../assets/images/martino.svg'
import img_square from '../../assets/images/square.svg'
import img_gabona from '../../assets/images/gabona.svg'


const PartnerSection = () => {
  return (
    
    <section className="partner">
            <div className="container">
                <img className="img1" src={img_paperz} alt=""/>
                <img src={img_dorfus} alt=""/>
                <img src={img_martino} alt=""/>
                <img src={img_square} alt=""/>
                <img src={img_gabona} alt=""/>
            </div>

    </section>
    
  )
}

export default PartnerSection