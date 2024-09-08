import { Intro } from "./Intro";
import { Tech } from "./Tech";
import Navbar from "../Navbar";
import Footer from "../Footer";
import About from "../About";
const Landing =()=>{
    return(
        <div  id="home" className="mx-0 md:mx-4 lg:mx-10 pt-4 ">
            <Navbar/>
            <Intro/>
            <Tech/>
            <About/>
            
        </div>
    )

}
export default Landing;