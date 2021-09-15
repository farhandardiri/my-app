
import { useState } from 'react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen1, setIsOpen1] = useState(false)
  return (
    <div>
      <nav className="bg-blue-500 lg:mx-auto md:ml-64 py-2 px-3">
        <div className=" max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
          <div className={isOpen1 ? `absolute left-64 mx-2 z-50 transition-all duration-300`:'flex absolute items-center justify-between mx-1.5 transition-all duration-500'}>
            {/* <div className="hidden absolute left-1/2 transform -translate-x-1/2 lg:flex lg:justify-center lg:items-center rounded-xl hover:bg-white hover:bg-opacity-50"> */}

            <button onClick={()=>setIsOpen1(!isOpen1)} className="focus:outline-none text-white relative ">
             
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
            <h4 className="uppercase text-white text-sm tracking-wider mt-1 mx-8">Name Page</h4>
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
                             <div  className={`${isOpen ? 'block':'hidden'} absolute right-0 z-40 mt-2  w-full lg:w-48  `}>
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
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <a href="#" target="_blank" rel="noreferrer" className="mt-2 text-center w-full inline-block">
            <h1 className="text-gray-900 text-xl font-bold leading-normal mt-0 mb-2">Sidebar</h1>
          </a>
          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />
            <ul className="flex-col min-w-full flex list-none">
              <li className="rounded-lg mb-4">
                <a href="#" className="flex items-center gap-4 text-sm text-gray-700 px-4 py-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Content */}
        <div className="max-w-md mx-auto rounded-xl lg:mt-2 mt-24  md:max-w-full lg:max-w-6xl">
        {/* <div className="ml-64 w-full p-10 lg:-mt-2 mt-16"> */}
          {/* <div className="md:overflow-hidden overflow-visible md:pb-24 pb-0"> */}
          <div className="md:overflow-hidden overflow-visible md:pb-24 pb-0">
            <div className="flex md:mt-4 -mt-16 space-x-2">
            {/* <div className="flex mt-4 lg:-mt-16 lg:space-x-2"> */}
              {/* <div className="w-full flex-shrink-0 rounded-xl"> */}
              <div className="w-full flex-shrink-0 rounded-xl">
                {/* <div className="flex md:space-x-4 space-x-10"> */}
                <div className="flex space-x-4 lg:space-x-10">
                  
                   <div className="w-1/3 bg-white shadow-lg border border-gray-100 rounded-xl flex flex-col lg:flex-row items-center px-3 py-5 lg:p-5 space-x-0 lg:space-x-5">
                        <div className="bg-indigo-50 p-2 rounded-lg text-blue-800 w-full lg:w-auto">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <div>
                          <span className="block uppercase text-xs text-gray-400 tracking-wider font-semibold">Visitors</span>
                          <span className="text-xl lg:text-2xl font-semibold">10,320</span>
                        </div>
                      </div>
                       <div className="w-1/3 bg-white shadow-lg border border-gray-100 rounded-xl flex flex-col lg:flex-row items-center px-3 py-5 lg:p-5 space-x-0 lg:space-x-5">
                        <div className="bg-indigo-50 p-2 rounded-lg text-blue-800 w-full lg:w-auto">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                          </svg>
                        </div>
                        <div>
                          <span className="block uppercase text-xs text-gray-400 tracking-wider font-semibold">Costumers</span>
                          <span className="text-xl lg:text-2xl font-semibold">4,628</span>
                        </div>
                      </div>
                      <div className="w-1/3 bg-white shadow-lg border border-gray-100 rounded-xl flex flex-col lg:flex-row items-center px-3 py-5 lg:p-5 space-x-0 lg:space-x-5">
                        <div className="bg-indigo-50 p-2 rounded-lg text-blue-800 w-full lg:w-auto">
                         <svg xmlns="http://www.w3.org/2000/svg" className="w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        </div>
                        <div>
                          <span className="block uppercase text-xs text-gray-400 tracking-wider font-semibold">Orders</span>
                          <span className="text-xl lg:text-2xl font-semibold">2,980</span>
                        </div>
                      </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      {/* akhir Content */}
    </div>
    );
}

export default App;
