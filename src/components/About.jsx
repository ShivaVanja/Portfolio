import full_stack from "./../assets/developer.svg"
const About = () => {
    return (
        <div id="about">
            <p className="text-center text-2xl font-extrabold">About Me</p>
            <div className="h-full grid grid-cols-8 gap-6 justify-center py-20">
                <div className="col-span-3">
                    <img className="h-80" src={full_stack} />
                </div>
                <div className="col-span-5 flex flex-col gap-3">
                    <p class="text-lg text-white">
                        Experienced <span class="text-red-500 font-semibold">full-stack developer</span> with a focus on <span class="text-red-500 font-semibold">JavaScript</span>, <span class="text-red-500 font-semibold">TypeScript</span>, and <span class="text-red-500 font-semibold">Solidity</span>. I specialize in building responsive and efficient web applications, with a strong emphasis on <span class="text-red-500 font-semibold">React</span> for frontend development and <span class="text-red-500 font-semibold">Node.js</span> for backend services.
                    </p>
                    <p class="text-lg text-white mt-4">
                        My expertise extends to creating secure. I'm also proficient in <span class="text-red-500 font-semibold">database management</span> using <span class="text-red-500 font-semibold">Prisma</span> and enjoy tackling complex problems, from designing <span class="text-red-500 font-semibold">multi-factor authentication systems</span> to optimizing <span class="text-red-500 font-semibold">API interactions</span>.
                    </p>
                    <p class="text-lg text-white mt-4">
                        Always eager to learn, I’m diving deeper into <span class="text-red-500 font-semibold">Rust</span> and continually refining my skills to stay ahead in the tech world.
                    </p>


                </div>
            </div>
            </div>
    )
}
export default About;