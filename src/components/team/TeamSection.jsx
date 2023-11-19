import React from 'react'

import img_team1 from '../../assets/images/team1.svg'
import img_team2 from '../../assets/images/team2.svg'
import img_team3 from '../../assets/images/team3.svg'
import img_team4 from '../../assets/images/team4.svg'
import Button from '../generic/Button'
import './TeamSection.css'

const TeamSection = () => {
  return (
    <section className="team-section">
            <div className="container">
                <div className="section-tittle">
                    <div>
                        <p>Meet our team</p>
                        <h2>Experience team members</h2>
                    </div>
                    <div className="btn">
                        <Button text='Browse Teams'/>
                    </div>
                </div>

                <div className="team-members">
                    <div>
                        <img src={img_team1}alt=""/>
                        <h3>kristine palmer</h3>
                        <p>chef operation officer</p>
                    </div>
                    <div>
                        <img src={img_team2} alt=""/>
                        <h3>kristine palmer</h3>
                        <p>chef operation officer</p>
                    </div>
                    <div>
                        <img src={img_team3} alt=""/>
                        <h3>kristine palmer</h3>
                        <p>chef operation officer</p>
                    </div>
                    <div>
                        <img src={img_team4} alt=""/>
                        <h3>kristine palmer</h3>
                        <p>chef operation officer</p>
                    </div>
                </div>
                
                <div className="under-sida">
                    <button className="cirkle"></button>
                    <button className="cirkle-1"></button>
                    <button className="cirkle"></button>
                    <button className="cirkle"></button>
                    <button className="cirkle"></button>
                </div>
            </div>
        </section>

  )
}

export default TeamSection