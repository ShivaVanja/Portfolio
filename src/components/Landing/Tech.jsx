import techstack from "./../../assets/techstack.png"
import aws from "./../../assets/aws.svg"
import tailwind from "./../../assets/tailwind-css.svg"
import postgresql from "./../../assets/postgresql.svg"
import nodejs from "./../../assets/node-js.svg"
import react from "./../../assets/react.svg"
import express from "./../../assets/express.svg"
import prisma from "./../../assets/image.png"
import { motion } from "framer-motion"
export const Tech = () => {
  const items = [
    {
      name: "react",
      img: react
    },
    {
      name: "tailwind",
      img: tailwind
    },
    {
      name: "nodejs",
      img: nodejs
    },
    {
      name: "express",
      img: express
    },
    {
     name:"prisma",
     img:prisma
    },
    {
      name: "postgresql",
      img: postgresql
    },
    
  ]


  return ( <div className="py-20 min-h-screen">
    <p className="flex justify-center gap-2 text-3xl font-extrabold text-center">
      <span>
        <img className="h-8" src={techstack} alt="Tech Stack Logo" />
      </span>
      Tech Stack
    </p>

    <div className="grid gap-10 mt-6 px-4 sm:px-6 lg:px-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {items.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gradient-to-r from-[#eb263d] to-[#242424] shadow-lg shadow-white rounded-3xl overflow-hidden"
        >
          <div className="bg-[#242424] p-6 flex flex-col items-center">
            <img className="h-20 w-20 mb-4" src={item.img} alt={item.name} />
            <p className="text-center text-white text-lg">{item.name}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
  )

}