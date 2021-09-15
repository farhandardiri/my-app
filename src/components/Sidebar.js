const Sidebar = () => {
    return ( 
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <a href="#" target="_blank" rel="noreferrer" className="mt-2 text-center w-full inline-block">
            <h1 className="text-gray-900 text-xl font-bold leading-normal mt-0 mb-2">Sidebar</h1>
          </a>
          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />
            <ul className="flex-col min-w-full flex list-none">
              <li className="rounded-lg mb-4">
                <a href="#" className="flex items-center gap-4 text-sm text-gray-500 px-4 py-3 rounded-lg hover:text-blue-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Dashboard
                </a>
              </li>
              <li className="rounded-lg mb-4">
                <a href="#" className="flex items-center gap-4 text-sm text-gray-500 px-4 py-3 rounded-lg hover:text-blue-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Table
                </a>
              </li>
            </ul>
          </div>
        </div> );
}
 
export default Sidebar;