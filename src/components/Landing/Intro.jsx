import profile from "./../../assets/profile.png";

export const Intro = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between mt-10 px-4 lg:px-10">
            <div className="w-full lg:w-1/2 lg:pr-10 flex flex-col gap-4">
                <p className="text-3xl lg:text-4xl font-bold text-center lg:text-left">Welcome to Adapt-x</p>
                <p className="text-3xl lg:text-4xl text-center lg:text-left">
                    Hi, I'm <span className="text-primary font-bungee">Shiva Reddy</span>
                </p>
                <p className="text-2xl lg:text-3xl text-center lg:text-left">Crafting Next-Generation,</p>
                <p className="text-2xl lg:text-3xl text-center lg:text-left">
                    <span className="text-primary font-bungee">Web</span> and <span className="text-primary font-bungee">Web3</span> Applications
                </p>
                <p className="text-base lg:text-lg text-center lg:text-left">
                    "Transforming ideas into dynamic web experiences -- whether
                </p>
                <p className="text-base lg:text-lg text-center lg:text-left">
                    it's building full-stack apps, deploying websites on AWS, or creating smart contracts and real-time Web3 solutions."
                </p>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
                <img className="rounded-full shadow-sm shadow-primary w-2/3 lg:w-3/4" src={profile} alt="Profile" />
            </div>
        </div>
    );
};
