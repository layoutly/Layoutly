import React from 'react'
import MagnetLines from '../icons/animations/MagnetLines'
import ShapeBlur from '../icons/animations/ShapeBlur'
import LogoLoop from '../icons/animations/LogoLoop'
import BlurText from '../icons/animations/BlurText'


const Page2 = () => {
    
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

  return (
    
    <div  className=' page-2  h-[120vh] relative w-full bg-[#0F1011] flex  flex-col items-center pt-[00px] justify-center overflow-hidden'>
  <BlurText
  text=" Technologies We Use"
  fontfamily="'Vujahday Script'" 
  delay={200}
  animateBy="words"
  direction="top"
  className="text-[50vh] text-white absolute left-[14%] top-60 mb-10 ml-8 "
/>

      <div className=' page2-top   '>  
        <MagnetLines
            rows={6}
            columns={9}
            containerSize="30vmin"
            lineColor="#ffffff"
            animated={true}
            lineWidth="0.8vmin"
            lineHeight="2.5vmin"
            baseAngle={0}
            style={{ margin: "2rem auto" }}
            z-index={4}
            className='absolute top-[48%] left-[0%] right-0 bottom-0 m-auto'
        />
        <ShapeBlur
            variation={0}
            pixelRatioProp={window.devicePixelRatio || 1}
            shapeSize={.8}
            roundness={0.5}
            borderSize={0.05}
            circleSize={0.05}
            circleEdge={1}
            z-index={2}
            className='absolute top-[20%] left-[0%] right-0 bottom-0 m-auto'
        />

        <LogoLoop
           z-index={3}
           infinity={true}
              speed={20}
            className='absolute top-[10%] left-[0%] right-0 bottom-0 m-auto'
       
        />
     </div>
    </div>




  )
}

export default Page2