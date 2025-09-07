import React from 'react'
import BlurText from '../icons/animations/BlurText'

const Page3top = () => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <div className="h-[30vh] relative w-full bg-[#0F1011] flex items-center justify-center overflow-hidden">
<BlurText
  text=" Services we offer"
  fontfamily="'Vujahday Script'"  // handwritten style
  delay={200}
  animateBy="words"
  direction="top"
  className="text-[12vh] "
/>
    </div>
  );
};

export default Page3top;
