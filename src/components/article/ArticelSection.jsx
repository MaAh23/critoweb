import React from 'react'
import img_pic1 from '../../assets/images/pic1.svg'
import img_pic2 from '../../assets/images/pic2.svg'
import img_pic3 from '../../assets/images/pic3.svg'
import './ArticelSection.css'
import Button from '../generic/Button'

const ArticelSection = () => {
  return (
    <section className="article-page1">
            <div className="container">
                <div className="section-tittle">
                    <div>
                        <p>Article & News</p>
                        <h2>Get Every Single Articles & News</h2>
                    </div>
                    <div>
                       <Button text='Browse Articles'/>
                    </div>
                </div>
                <div className="main-artikel">
                    <article>
                        <img src={img_pic1}alt=""/>
                        <p>Business</p>
                        <h3>How To Use Digitalization In The Classroom</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </article>
                    <article>
                        <img src={img_pic2} alt=""/>
                        <p>Business</p>
                        <h3>How To Implement Chat GPT In Your Projects</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </article>
                    <article>
                        <img src={img_pic3} alt=""/>
                        <p>Business</p>
                        <h3>The Guide To Support Modern CSS Design</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </article>
                </div>
                <div className="under-sida">
                    <button className="cirkle-1"></button>
                    <button className="cirkle"></button>
                    <button className="cirkle"></button>
                    <button className="cirkle"></button>
                    <button className="cirkle"></button>
                </div>
            </div>
        </section>
  )
}

export default ArticelSection