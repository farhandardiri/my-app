import './App.css';
import Navbar from './components/Navbar';


function App() {
 
  return (
    <div className="App">
      <Navbar/>
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
