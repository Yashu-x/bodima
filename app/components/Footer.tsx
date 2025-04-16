const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-700">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-2">
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
            <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700">
              Bodima
            </span>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="border-r-1 border-gray-300">
          <h4 className="font-bold mb-2">QUICK NAVIGATION</h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <a href="/">Home</a>
            <a href="#">Login</a>
            <a href="#">About Us</a>
            <a href="#">Register</a>
            <a href="#">Contact Us</a>
            <a href="#">Post your ad</a>
          </div>
        </div>

        {/* Stay Connected */}
        <div className="border-r-1 border-gray-300">
          <h4 className="font-bold mb-2">STAY CONNECTED</h4>
          <div className="flex flex-col gap-2 text-xs">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Youtube</a>
          </div>
        </div>

        {/* Contact Details */}
        <div>
          <h4 className="font-bold mb-2">CONTACT DETAILS</h4>
          <p className="text-xs">Tel: (+94) 035-2246013</p>
          <a
            href="mailto:boaring@gmail.com"
            className="text-blue-600 underline text-xs"
          >
            boaring@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
