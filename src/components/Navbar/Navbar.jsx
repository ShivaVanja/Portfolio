import { Logo } from "./Logo";
import { Contact } from "./Contact";
const Navbar = () => {
    return (
        <>
            <div className="grid grid-cols-6 mt-2 ">
                <div className="col-span-2">
                    <Logo />
                </div>
                <div className="flex gap-6 col-span-3 text-xl">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#about">About</a></p>
                    <p ><a href="https://github.com/ShivaVanja/">Projects</a></p>
                    <p><a >Blogs</a></p>
                </div>
                <div className="col-span-1 mr-0">
                    <a href="#contact"><Contact/></a>
                </div>
            </div>
        </>
    );

};
export default Navbar;
