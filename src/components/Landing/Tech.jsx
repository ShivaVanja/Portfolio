import techstack from "./../../assets/techstack.png"
import aws from "./../../assets/aws.svg"
import tailwind from "./../../assets/tailwind-css.svg"
import postgresql from "./../../assets/postgresql.svg"
import nodejs from "./../../assets/node-js.svg"
import react from "./../../assets/react.svg"
import express from "./../../assets/express.svg"
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
      name: "postgresql",
      img: postgresql
    },
    
  ]


  return (
    <>
      <div className="py-20 h-min">
        <p className="flex  justify-center gap-2 text-2xl text-center font-extrabold">
          <span>
            <img className="h-8" src={techstack}></img>
          </span>
          Tech Stack </p>
        <div className="flex gap-10 justify-center mt-6 flex-wrap">
          {items.map((item, index) => (
            <div className="rounded-3xl  bg-gradient-to-r from-[#eb263d] to-[#242424] shadow-lg shadow-white" style={{padding:'1px'}}>
              
            <div key={index} className="rounded-3xl bg-[#242424] p-10 `rounded-[calc(1.5rem-1px)]`" style={{margin:"1px"}}>
             <img className="h-20 w-20"src={item.img} />
             <p></p>
            </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )

}