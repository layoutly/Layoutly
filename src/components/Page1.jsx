import React, { useState } from "react";
import { PackageOpen } from "../icons/PackageOpen";
import { BadgeDollarSign } from "../icons/BadgeDollarSign";
import { ChevronDown } from "../icons/ChevronDown";
import { Blend } from "../icons/Blend";
import { motion } from "framer-motion";
import ClickSpark from "../icons/animations/ClickSpark";
const Page1 = () => {
  const [navFixed, setNavFixed] = useState(false);

  // Variants for nav items
  const navItemVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 1.2 + i * 0.3 }, 
      // nav items start AFTER logo (logo finishes ~1s), then stagger
    }),
  };

  return (
    <div className="page1 bg-[#0F1011] h-screen w-full flex items-center justify-center">
      <ClickSpark
  sparkColor='#fff'
  sparkSize={20}
  sparkRadius={50}
  sparkCount={8}
  duration={500}
>
  <nav
        className={`navbar h-[10vh] w-full flex items-center justify-evenly gap-[400px] px-[10vh] top-0 left-0 z-50 ${
          navFixed ? "fixed" : "absolute"
        }`}
      >
        {/* Left side */}
        <div className="flex gap-8 items-center">
          {[
            { text: "Products", Icon: PackageOpen },
            { text: "Pricing", Icon: BadgeDollarSign },
          ].map((item, i) => (
            <motion.span
              key={item.text}
              custom={i}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              style={{
                fontFamily: "Outfit, sans-serif",
                fontWeight: 400,
                fontSize: "1.3rem",
                color: "white",
              }}
              className="text-white font-semibold uppercase flex items-center"
            >
              {item.text}
              <item.Icon className="ml-2 w-5 h-5 text-white" />
            </motion.span>
          ))}
        </div>

        {/* Center Logo */}
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span
            style={{
              fontFamily: "'Vujahday Script', cursive",
              fontSize: "5rem",
              color: "white",
            }}
          >
            Layoutly
          </span>
        </motion.div>

        {/* Right side */}
        <div className="flex gap-8">
          {[
            { text: "Process", Icon: ChevronDown },
            { text: "Contact", Icon: Blend },
          ].map((item, i) => (
            <motion.span
              key={item.text}
              custom={i + 2} // continue stagger index after left items
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              style={{
                fontFamily: "Outfit, sans-serif",
                fontWeight: 400,
                fontSize: "1.3rem",
                color: "white",
              }}
              className="text-white font-semibold uppercase flex items-center"
            >
              {item.text}
              <item.Icon className="ml-2 w-5 h-5 text-white" />
            </motion.span>
          ))}
        </div>
      </nav>
</ClickSpark>
      
      
      

      {/* Hero Section */}
      <div className="page1-main group z-1 bg-[#28292A] h-[80vh] w-[78%] flex justify-between items-center rounded-[100px] absolute top-[200px]">
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 2.5, // AFTER logo + nav
            onComplete: () => setNavFixed(true), // fix nav after animation
          }}
          style={{
            fontFamily: "'Vujahday Script', cursive",
            fontSize: "5rem",
          }}
          className="text-white absolute left-[150px] px-8 py-4 rounded-xl"
        >
          Your Vision is <br /> Our Expertise
        </motion.h1>

        <div className="right-side h-full w-[50%] flex items-center justify-end">
          <img
            src="/page-1 bg.avif"
            alt="Page background"
            className="rounded-2xl w-[150%] h-[150%] object-cover absolute -right-80 
                       group-hover:animate-pulse transition-all duration-300 ease-in-out"
          />
        </div>

        <div className="border div h-[85vh] w-[105%] bg-transparent border-[#363636] absolute z-2 -left-[35px] rounded-[100px] 
                       transition-all duration-300 hover:shadow-[0_0_30px_10px_#F8FDFF] hover:animate-pulse"></div>
      </div>
    </div>
    
  );
};

export default Page1;
