import { motion } from "framer-motion";
import full_stack from "./../assets/developer.svg";

const About = () => {
    return (
        <div id="about">
            <p className="text-center text-4xl font-extrabold">About Me</p>
            <div className="h-full grid grid-cols-8 gap-6 justify-center py-10">

                {/* Animated Image */}
                <motion.div
                    className=" col-span-8 md:col-span-3  "
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <img className="h-80" src={full_stack} alt="Full Stack Developer" />
                </motion.div>

                {/* Animated Text */}
                <motion.div
                    className=" col-span-8 text-center md:text-left md:col-span-5    flex flex-col gap-3 "
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-lg text-white">
                        Experienced <span className="text-red-500 font-semibold">full-stack developer</span> specializing in <span className="text-red-500 font-semibold">JavaScript</span> and <span className="text-red-500 font-semibold">TypeScript</span>, with a focus on building scalable and performant web applications. I leverage <span className="text-red-500 font-semibold">React</span> for crafting responsive, user-centric UIs and use <span className="text-red-500 font-semibold">Node.js</span> with <span className="text-red-500 font-semibold">Prisma</span> for efficient and secure backend services.
                    </p>
                    <p className="text-lg text-white mt-4">
                        My expertise lies in architecting full-stack solutions, integrating modern frameworks like <span className="text-red-500 font-semibold">Tailwind CSS</span> for design, and optimizing data flow using <span className="text-red-500 font-semibold">Prisma</span> for seamless database management. I excel in solving complex challenges, from improving <span className="text-red-500 font-semibold">API performance</span> to implementing <span className="text-red-500 font-semibold">secure authentication systems</span>.
                    </p>
                    <p className="text-lg text-white mt-4">
                        Continuously learning and exploring, I’m currently expanding my skill set by diving deeper into <span className="text-red-500 font-semibold">Rust</span> and keeping up with the latest advancements in web technologies.
                    </p>

                </motion.div>

            </div>
        </div>
    );
};

export default About;
