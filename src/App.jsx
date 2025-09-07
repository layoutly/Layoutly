import React from 'react'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3top from './components/Page3top'
import Page3 from './components/Page3'
import useLenis from "./hooks/useLenis"; 
import SplashCursor from './icons/animations/SplashCursor'


import TargetedCursor from './icons/animations/Targetedcursor'

import Process from './components/Process'
import Pricing from './components/Pricing'




const App = () => {
  useLenis();
  
  return (
 
    <>
    {/* <SplashCursor/> */}
    <TargetedCursor spinDuration={5}
    hideDefaultCursor={true}/>
    <Page1/>
    <Page2/>
    <Page3top/>
    <Page3/>
    <Process/>
    <Pricing/>
  
    
   

    </>
  )
}

export default App