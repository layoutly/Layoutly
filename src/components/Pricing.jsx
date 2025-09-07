import React from 'react'
import BlurText from '../icons/animations/BlurText'
import ElectricBorder from '../icons/animations/ElectricBorder'

const Pricing = () => {
  return (
<div className='bg-[#0F1011] h-screen w-full flex  flex-col'>
        <BlurText
            text="  Pricing"
            fontfamily="'Vujahday Script'"  // handwritten style
            delay={200}
            animateBy="words"
            direction="top"
            className="text-[15vh] ml-[20vh]  "
/>
<div className=' flex align-middle justify-center gap-18 '>
    <ElectricBorder
    color="#7df9ff"
    speed={1}
    chaos={0.5}
    thickness={2}
    style={{ borderRadius: 16, height:"50vh", width:"40vh",  marginTop:"10vh", padding:"20px" }}
    >
    <div>
    <h4></h4>
    <h1></h1>
    <button></button>
    <h1></h1>
    <h1></h1>
    <h1></h1>
    <h1></h1>
    </div>
    </ElectricBorder>
     <ElectricBorder
    color="#7df9ff"
    speed={1}
    chaos={0.5}
    thickness={2}
    style={{ borderRadius: 16, height:"50vh", width:"40vh",  marginTop:"10vh", padding:"20px" }}
    >
  <div className=" bg-trasfernet  font-cinzel h-[48vh] rounded-2xl  shadow-lg p-6  text-center">
  {/* Plan */}
  <h4 className="text-3xl font-bold   text-white tracking-wide absolute left-0 top-10 uppercase">Starter Plan</h4>
  
  {/* Price */}
  <h1 className="text-[10vh] font-bold   text-white tracking-wide absolute left-20 top-20 uppercase">$19<span className="text-3xl font-medium text-white">/mo</span></h1>
  
  {/* Button */}
  <button className="text-[2vh] font-bold bg-[#458386] border-[#363636]transition-all duration-300 hover:shadow-[0_0_30px_10px_#F8FDFF] hover:animate-pulse h-[7vh]  w-[37vh] text-white tracking-wide left-0 rounded-2xl  absolute top-60 uppercasel ">
    Get Started
  </button>
  
  {/* Features */}
  <div className='absolute left-10 top-[65%]  text-left'>
    <h1 className="mt-6 font-semibold text-white text-2xl ">What’s included:</h1>
  <h1 className="text-white text-2xl mt-2">✔ 5 Projects</h1>
  <h1 className="text-white text-2xl">✔ Basic Support</h1>
  <h1 className="text-white text-2xl">✔ 500MB Storage</h1>
  <h1 className="text-white text-2xl">✔ Access to Community</h1></div>
</div>

    </ElectricBorder>
    <ElectricBorder
    color="#7df9ff"
    speed={1}
    chaos={0.5}
    thickness={2}
    style={{ borderRadius: 16, height:"50vh", width:"40vh",  marginTop:"10vh", padding:"20px" }}
    >
    <div>
    <h4></h4>
    <h1></h1>
    <button></button>
    <h1></h1>
    <h1></h1>
    <h1></h1>
    <h1></h1>
    </div>
    </ElectricBorder>
</div>

</div>
  )
}

export default Pricing