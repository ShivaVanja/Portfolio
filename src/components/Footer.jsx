import twitter from "./../assets/twitter.svg";
import instagram from "./../assets/instagram.svg";
import github from "./../assets/github.svg";

const Footer = () => (
  <div className=" flex-wrap text-center md:flex md:justify-evenly  lg:p-10 mt-4 bg-[#292828]">
    {/* Address Section */}
    <div>
      <p className="text-xl font-semibold text-primary">Address</p>
      <p>Shiva Reddy Vanja</p>
      <p>Hyderabad, Telangana</p>
    </div>

    {/* Contact Section */}
    <div id="contact">
      <p className="text-xl font-semibold text-primary">Contact</p>
      <p>+91 6301715606</p>
      <p>shivareddyvanja@gmail.com</p>
    </div>

    {/* Social Links Section */}
    <div>
      <p className="text-xl font-semibold text-primary">Follow me</p>
      <div className="flex justify-center space-x-1">
        <a href="https://www.x.com/shivareddyvanja" target="_blank" rel="noopener noreferrer">
          <img className="h-8" src={twitter} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/__shiva_reddy" target="_blank" rel="noopener noreferrer">
          <img className="h-8 bg-white rounded-md" src={instagram} alt="Instagram" />
        </a>
        <a href="https://github.com/ShivaVanja" target="_blank" rel="noopener noreferrer">
          <img className="h-8 bg-white rounded-md" src={github} alt="GitHub" />
        </a>
      </div>
   
    </div>
  </div>
);

export default Footer;
