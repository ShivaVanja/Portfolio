
const Navbar = () => {
    return (
        
      <header className="flex items-center justify-between lg:p-4 border-b border-gray-700 text-base">
      <div className="flex items-center space-x-2">
       
        <span className="  md:text-2xl font-bold text-red-500">Adapt-X</span>
      </div>
      <nav className="flex space-x-4 lg:text-xl">
        <a href="#home" className="hover:text-red-500">Home</a>
        <a href="#about" className="hover:text-red-500">About</a>
        <a href="https://github.com/ShivaVanja" className="hover:text-red-500">Projects</a>
        <a href="#" className="hover:text-red-500">Blogs</a>
      </nav>
      <button variant="default" className="bg-red-500 hover:bg-red-600 p-2 px-3 rounded lg:text-xl">
        Contact
      </button>
    </header>
        
    );

};
export default Navbar;
