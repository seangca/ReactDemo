import { useEffect, useRef, useState } from 'react'
import { Link } from 'wouter';

export default function Navbar() {
  const navBG = "bg-gray-800 text-white" // https://tailwindcss.com/docs/colors

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };


  const handleClickOutside = (event) => {
    // Check if the click is outside the dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Attach the event listener when the dropdown is open
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <nav className={`${navBG} fixed w-full z-20 top-0 start-0 shadow-md`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {window.innerWidth < 768 && <div></div>}
        <span className=" md:pl-12 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          React Demo
        </span>

        {!isMobile ? (<div
          className="items-centery hidden w-full md:flex md:w-auto md:order-1 pr-16"
          id="navbar-sticky"
        >
          <ul className={`flex p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ${navBG}`}>
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 text-lg text-black ${navBG} rounded md:bg-transparent md:text-white md:p-0`}
                aria-current="page"
              >
                {"Home"}
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block py-2 px-3 text-lg text-black ${navBG} rounded md:bg-transparent md:text-white md:p-0`}
              >
                {"Contact"}
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className={`block py-2 px-3 text-black text-lg ${navBG} rounded md:bg-transparent md:text-white md:p-0`}
              >
                {"Events"}
              </Link>
            </li>
          </ul>
        </div>
        ) : (
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center md:hidden  justify-between w-full px-3 text-white rounded"
            >
              ☰
            </button>
            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div
                className={`absolute right-0 mt-2 w-44 ${navBG} rounded-lg shadow-lg border border-gray-400`}
                id="dropdownNavbar"
                ref={dropdownRef}
              >
                <ul
                  className="text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <Link
                      to="/"
                      className={`block py-2 px-3 text-lg text-white ${navBG} rounded md:bg-transparent md:text-white md:p-0`}
                      aria-current="page"
                      onClick={toggleDropdown}
                    >
                      {"Home"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className={`block py-2 px-3 text-lg text-white ${navBG} rounded md:bg-transparent md:text-white md:p-0`}
                      onClick={toggleDropdown}
                    >
                      {"Contact"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/events"
                      className={`block py-2 px-3 text-white text-lg ${navBG} rounded md:bg-transparent md:text-white md:p-0`}
                      onClick={toggleDropdown}
                    >
                      {"Events"}
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}


