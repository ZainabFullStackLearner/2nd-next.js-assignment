export default function Navbar(){
    return(
      
        <nav className="border w-full h-[91px] py-6 flex justify-between items-center px-12 bg-[#1D1E2C] pb-10">
        <div className="text-white font-bold text-xl">BrandName</div>
        <div className="flex space-x-8 text-white">
          <a href="#" className="hover:text-blue-400">
            Home
          </a>
          <a href="#" className="hover:text-blue-400">
            
            Product
          </a>
          <a href="#" className="hover:text-blue-400">
          
            Pricing
          </a>
          <a href="#" className="hover:text-blue-400">
          Contact
          </a>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-white hover:text-blue-400 mt-2">
            Login
          </a>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:text-gray-600 mr-4">
            JOIN US
          </button>
        </div>
      </nav>
      
    )
}