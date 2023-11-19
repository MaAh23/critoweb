import React from 'react'
import ShowcaseSection from './showcase/ShowcaseSection'
import HeaderSection from './header/HeaderSection'
import FeatureSection from './Feature/FeatureSection'
import PartnerSection from './partner/PartnerSection'
import AbouteSection from './aboute-company/AbouteSection'
import ServiseSection from './service/ServiseSection'
import PrijectSection from './project/PrijectSection'
import TeamSection from './team/TeamSection'
import ArticelSection from './article/ArticelSection'
import NyheterSection from './nyhet/NyheterSection'
import LastSection from './last/LastSection'


const Header = () => {
  return (
   <header>

    <HeaderSection/>
    <ShowcaseSection/>
    <PartnerSection/>
    <FeatureSection/>
    <AbouteSection/>
    <ServiseSection/>
    <PrijectSection/>
    <TeamSection/>
    <ArticelSection/>
    <NyheterSection/>
    <LastSection/>
       
  </header>
   
  )
}

export default Header