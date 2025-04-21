import React from 'react'
import HeroSectin from '../Components/HeroSection'
import SliderCom from '../Components/SliderCom'
import Imagtext from '../Components/Imagtext'
import ContactFrom from '../Components/ContactFrom'
import Testimonails from '../Components/Testimonails'
import TrustedPatner from '../Components/TrustedPatner'
const Home = () => {
  return (
    <div>
        <HeroSectin/>
        <SliderCom heading={'Recent Work'} sliderNum={3.4} moreButton={""}/>
        <Imagtext/>
        <SliderCom heading={'Insights'} sliderNum={4.9} moreButton={"View more insignts"}/>
        <ContactFrom/>
        <Testimonails/>
        <TrustedPatner /> 
    </div>
  )
}

export default Home