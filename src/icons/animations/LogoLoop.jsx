import React from "react";
import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

const LogoLoop = () => {
  const techLogos = [
    { node: <SiReact color="#ffffff" size={200} />, title: "React" },
    { node: <SiNextdotjs color="#ffffff" size={200} />, title: "Next.js" },
    { node: <SiTypescript color="#ffffff" size={200} />, title: "TypeScript" },
    { node: <SiTailwindcss color="#ffffff" size={200} />, title: "Tailwind" },
  ];

  return (
    <div className="absolute top-[50%] left-[0%] right-0 bottom-0  w-screen     overflow-hidden bg-transfarent py-6">
      <motion.div
        className="flex gap-50"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20, // adjust for speed
        }}
      >
        {/* Duplicate array for seamless loop */}
        {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center  w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
          {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
          {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
          {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))} {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}

         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
         {[...techLogos, ...techLogos].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[300px] h-[300px]"
          >
            {logo.node}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoLoop;
