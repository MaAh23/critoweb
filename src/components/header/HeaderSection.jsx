import React from 'react'
import img_backgroundLines from '../../assets/images/logotype.svg'
import './headerSection.css'
import Button from '../generic/Button'


const HeaderSection = () => {
  return (
    <section className="headerSection">
        <div className="container">
                  <a href="index.html"> <img src={img_backgroundLines} alt="" /></a>
                  <button className="menu-bars"><i className="fa.solid fabars-staggered"></i></button>
                  <div className="menu">
                      <div className="top-menu">
                          <div className="contact-info">
                              <div className="info-box">
                                  <i className="fa-solid fa-phone"></i>
                                  +46 (8) 121 470 50
                              </div>
                              <div className="info-box">
                                  <i className="fa-solid fa-envelope"></i>
                                  info@crito.com
                              </div>
                              <div className="info-box last">
                                  <i className="fa-solid fa-location-dot"></i>
                                  Sveavägen 31, 111 34  stockholm
                              </div>
                          </div>
                          <div className="sociala-medier">
                              <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                              <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                              <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                              <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                          </div>
                      </div>
                      <div className="under-menu">
                          <nav>
                              <a className="actic" href="index.html">Home</a>
                              <a href="service.html">Service</a>
                              <a href="news.html">News</a>
                              <a href="contact.html">contact</a>
                          </nav>
                          <Button text='Login' url='/service/login'/>
                      </div>
                  </div>
              </div>
      </section>
  )
}

export default HeaderSection