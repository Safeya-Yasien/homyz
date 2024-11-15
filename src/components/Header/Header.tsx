import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-20 px-4 w-full  bg-black sticky top-0 z-50">
      <div className="flex items-center justify-between h-full">
        {/* logo */}
        <div className="h-full flex items-center justify-center">
          <Link to="/" className="relative">
            <img src="/logo.png" alt="Logo" className="" width={100} />
          </Link>
        </div>
        {/* links */}
        <nav className="flex items-center gap-6">
          <ul className="flex items-center gap-4">
            <li>
              <Link
                to="/about"
                className="capitalize text-white-78"
              >
                Residencies
              </Link>
            </li>
            <li>
              <Link
                to="/value"
                className="capitalize text-white-78"
              >
                Our Value
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="capitalize text-white-78"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/start"
                className="capitalize text-white-78"
              >
                Get Started
              </Link>
            </li>
          </ul>
          <button className="rounded-md bg-blue-gradient text-sm text-white font-medium py-2 px-6 border-none outline-none transition-all duration-300 ease-in hover:scale-110">
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
