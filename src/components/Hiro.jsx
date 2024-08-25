import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion"
import profile from "../assets/home.png";
import React from "react";



const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  }
})

const Hiro = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36"> {/* Changed to lg:mb-36 */}
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <Title />
            <Profesi />
            <Contact />
          </div>
        </div>
        <Image />
      </div>
    </div>
  );
};

export default Hiro;


const Title = () => {
  return (
    <motion.h1
      variants={container(0)}
      initial="hidden"
      animate="visible"
      className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
      M MUGHNI
    </motion.h1>
  )
}

const Profesi = () => {
  return (
    <motion.span
      variants={container(0.5)}
      initial="hidden"
      animate="visible"
      className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
      Front End Developer {/* Corrected spelling */}
    </motion.span>
  )
}

const Contact = () => {
  return (
    <motion.p
      variants={container(1)}
      initial="hidden"
      animate="visible"
      className="my-2 max-w-xl py-6 font-light tracking-tighter">
      {HERO_CONTENT}
    </motion.p>
  )
}

const Image = () => {
  return (
    <div className="w-full lg:w-1/2 lg:p-8">
      <div className="flex justify-center">
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          src={profile} alt="Profile" className="rounded-2xl w-80" />
      </div>
    </div>
  )
}