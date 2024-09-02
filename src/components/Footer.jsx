import twitter from "./../assets/twitter.svg"
import instagram from "./../assets/instagram.svg"
import github from "./../assets/github.svg"

const Footer = ()=>{
    return(
     <>
    
     <div className="flex justify-evenly p-10 mt-4 bg-[#292828]">
        <div >
          <p className="text-xl font-semibold">Address</p>
          <p>Shiva Reddy Vanja</p>
          <p>Hyderabad,Telangana</p>
        </div>
        <div id="contact">
            <p className="text-xl font-semibold">Contact</p>
            <p>+916301715606</p>
            <p>shivareddyvanja@gmail.com</p>
        </div>
        <div >
          <p className="text-xl font-semibold ">Follow me </p>
          <div className="flex space-x-1">
         <a href="https://www.x.com/shivareddyvanja"> <img className="h-8" src={twitter}/></a>
         <a href="https://www.instagram.com/__shiva_reddy"><img className="h-8 bg-white rounded-md" src={instagram}/></a>
         <a href="https://github.com/ShivaVanja"><img className="h-8 bg-white rounded-md" src={github}/></a>
          </div>
         
        </div>
        
     </div>
     </>
    );
}
export default Footer;