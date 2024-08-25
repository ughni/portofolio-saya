import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { FaLaravel } from "react-icons/fa6";
import { DiJqueryLogo } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa"
import { motion } from "framer-motion"
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVisualstudiocode } from "react-icons/si";



const iconsAnimasi = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: 2.5,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  }
})

const Teknologis = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <Title />
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">
        <React />
        <NextJs />
        <Laravel />
        <Jquery />
        <NodeJs />
        <Bootatrap />
        <Tailwind />
        <Visualstudiocode />
      </motion.div>
    </div>

  )
}

export default Teknologis



function Title() {
  return (
    <motion.h2
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className="my-20 text-center text-4xl">Technologies and Tools</motion.h2>
  )
}

function React() {
  return (
    <motion.div
      variants={iconsAnimasi(2.5)}
      initial="initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-white">
      <RiReactjsLine className="text-7xl text-cyan-400 " />
    </motion.div>
  )
}

function NextJs() {
  return (
    <motion.div
      variants={iconsAnimasi(3)}
      initial="initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-white">
      <TbBrandNextjs className="text-7xl  " />
    </motion.div>
  )
}

function Laravel() {
  return (
    <motion.div
      variants={iconsAnimasi(5)}
      initial="initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 hover:border-white p-4">
      <FaLaravel className="text-7xl text-red-700 " />
    </motion.div>
  )
}

function Jquery() {
  return (
    <motion.div
      variants={iconsAnimasi(2)}
      initial="initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 hover:border-white p-4">
      <DiJqueryLogo className="text-7xl text-sky-700 " />
    </motion.div>
  )
}

function NodeJs() {
  return (
    <motion.div
      variants={iconsAnimasi(6)}
      initial="initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 hover:border-white p-4">
      <FaNodeJs className="text-7xl text-green-500 " />
    </motion.div>
  )
}

function Bootatrap() {
  return (
    <motion.div
      variants={iconsAnimasi(2.5)}
      initial="initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 hover:border-white p-4">
      <FaBootstrap className="text-7xl text-blue-900 " />
    </motion.div>
  )
}
function Tailwind() {
  return (
    <motion.div
      variants={iconsAnimasi(2.5)}
      initial="initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-white">
      <RiTailwindCssFill className="text-7xl text-cyan-400 " />
    </motion.div>
  )
}
function Visualstudiocode() {
  return (
    <motion.div
      variants={iconsAnimasi(2.5)}
      initial="initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-white">
      <SiVisualstudiocode className="text-7xl text-cyan-700 " />
    </motion.div>
  )
}

