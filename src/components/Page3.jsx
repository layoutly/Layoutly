import React from 'react'
import BlurText from '../icons/animations/BlurText'
import CircularGallery from '../icons/animations/CircularGallery'
import MagicBento from '../icons/animations/MagicBento'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const Page3 = () => {
            const handleAnimationComplete = () => {
                console.log("Animation completed!");
             }

    
  return (
   
    <div className=' relative text-amber-100  min-h-[100vh] w-full bg-[#0F1011] flex flex-col   mt-[100px]  align-middle justify-center'> 
        
    

      <div className='service  w-full mr-[500px]  h-full flex flex-col items-center justify-center '>
    
        <MagicBento  className="" 
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={400}
          particleCount={25}
          glowColor="132, 0, 255"/>
      </div>
    </div>
  )
}

export default Page3