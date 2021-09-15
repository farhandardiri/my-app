import { useState } from "react";
import Sidebar from "./Sidebar";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpen1, setIsOpen1] = useState(false)
    return ( 
        <div className="navbar">
            <nav className="bg-blue-500 mx-auto py-2 px-3">
            <div className=" max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
            <div className={isOpen1 ? `absolute left-64 mx-2 z-50 transition-all duration-300`:'flex absolute items-center justify-between mx-1.5 transition-all duration-500'}>
                {/* <div className="hidden absolute left-1/2 transform -translate-x-1/2 lg:flex lg:justify-center lg:items-center rounded-xl hover:bg-white hover:bg-opacity-50"> */}

                <button onClick={()=>setIsOpen1(!isOpen1)} className="focus:outline-none text-white relative ">

                            <div 
                                enter-active-class="transition ease-out duration-100 transform"
                                enter-from-class="opacity-0 scale-95"
                                enter-to-class="opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75 transform"
                                leave-from-class="opacity-100 scale-100"
                                leave-to-class="opacity-0 scale-95"
                                />
                
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white \" viewBox="0 0 20 20" fill="currentColor">
                    <path className={!isOpen1 ? `block`: 'hidden'} fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path className={isOpen1 ? `block`: 'hidden'} fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                
                </button>
                {/* <div className="absolute top-2 md:hidden left-64 z-50 transition-all duration-300">
                <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-12 h-12 p-0 md:grid place-items-center text-sm leading-relaxed bg-transparent md:relative md:overflow-hidden">
                
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white text-2xl leading-none" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                </div> */}
            </div>
            <div className="flex justify-between items-center w-full">
                <h4 className="uppercase text-white text-sm tracking-wider mt-1 mx-8">Dashboard</h4>
                <div className="flex">
                {/* <div className="relative lg:w-60 sm:w-full flex items-center bg-white bg-opacity-20 py-1 px-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white text-xl mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                    <input type="text" placeholder="Search" className="bg-transparent border-none text-sm leading-snug text-white w-full font-normal placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-0" />
                </div> */}
                <div className="-mr-4 ml-6">
                    <button onClick={()=>setIsOpen(!isOpen)} className="flex items-center justify-center gap-1 rounded-lg font-bold outline-none capitalize tracking-wider focus:outline-none transition-all duration-300 md:rounded-full p-2.5 pl-7 pr-5 text-sm leading-normal text-white md:p-0 md:bg-transparent">
                    <div className="w-12">
                        <img src="https://picsum.photos/200" className="rounded-full  max-w-full h-auto align-middle border-none " alt="" />
                    </div>
                    </button>
                                <div  className={`${isOpen ? 'block':'hidden'} absolute right-0 z-40 mt-1  w-full lg:w-48  `}>
                                    <div className="bg-white mx-4  rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">                                                              
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100">Profile</a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100">Setting</a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100">Log out</a>
                                    </div>
                                </div>

                </div>
                </div>
            </div>
            </div>
        </nav>
            <div className={`${isOpen1 ? 'h-screen':'hidden'}  fixed  top-0 md:left-0 left-0 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}>
                <Sidebar />
            </div>
      </div>
     );
}
 
export default Navbar;