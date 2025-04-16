const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-gray-700">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <div className="flex items-center pt-10 space-x-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 9.75l9-6 9 6v9.75a2.25 2.25 0 01-2.25 2.25h-13.5A2.25 2.25 0 013 19.5V9.75z"
                />
            </svg>
            <span className="text-4xl font-semibold text-gray-700">Bodima</span>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="border-r-1 border-gray-700">        
          <h4 className="font-bold mb-2">QUICK NAVIGATION</h4>
            <div className="grid grid-cols-2 grid-rows-3 gap-3 text-xs">
                <div ><a href="/">Home</a></div>
                <div className="col-start-1 row-start-2"><a href="#">About Us</a></div>
                <div className="col-start-1 row-start-3"><a href="#">Contact Us</a></div>
                <div className="col-start-2 row-start-1"><a href="#">Login</a></div>
                <div className="col-start-2 row-start-2"><a href="#">Register</a></div>
                <div >Post your ad</div>
            </div>
        </div>

        {/* Stay Connected */}
        <div className="border-r-1 border-gray-700">
            <h4 className="font-bold mb-2">STAY CONNECTED</h4>
            <div className="grid grid-cols-1 grid-rows-3 gap-3 text-xs">
                <div ><a href="#">Facebook</a></div>
                <div className="col-start-1 row-start-2"><a href="#">Instagram</a></div>
                <div className="col-start-1 row-start-3"><a href="#">Youtube</a></div>
            </div>
        </div>

        {/* Contact Details */}
        <div>
          <h4 className="font-bold mb-2">CONTACT DETAILS</h4>
          <p>Tel: (+94) 035-2246013</p>
          <a href="mailto:boaring@gmail.com" className="text-blue-600 underline">
            boaring@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
