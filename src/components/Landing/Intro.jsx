import profile from "./../../assets/profile.png"
export const Intro = () => {
    return (
        <div className="grid grid-cols-10 mt-10 ">
            <div className=" col-span-6 py-2 flex flex-col gap-6 mt-16">
                <div>
                <p className="text-md">Welcome to Adapt-x</p>
                <p className="text-5xl">Hi, I'm <span className="text-primary font-bungee text-5xl">Shiva Reddy</span></p>
                </div>
                
                <p className="text-4xl">Crafting Next-Generation, </p>
                <p className="text-3xl "><span className="text-primary font-bungee">Web</span> and <span className="text-primary font-bungee">Web3</span> Applications</p>
               
                <p className="text-lg">"Transforming ideas into dynamic web experiences -- whether</p>
                <p className="text-lg">  it's building full-stack apps, deploying websites on AWS, </p>
                <p className="text-lg">  or creating smart contracts and real-time Web3 solutions."</p> 
                
               
            </div>

      
            <div className="col-span-4 ">
                <div className=" rounded-sm">
                <img className="" src={profile}></img>
                </div>
                    
                </div>
        </div>
    )

}