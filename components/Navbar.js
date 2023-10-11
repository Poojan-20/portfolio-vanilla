import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="">
      <nav className="flex max-w-full w-full flex-wrap items-center justify-between px-2 py-3">
        <div className="container max-w-full px-4 flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap lowercase "
              href="/" onClick={() => setNavbarOpen(false)}
            >
              Poojan patel
            </Link>
            <button
              className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={20} fill={theme == "light" ? "black" : "white"} viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 h-full flex items-center text-xs lowercase font-bold leading-snug  hover:opacity-75 hover:underline"
                  href="/about" onClick={() => setNavbarOpen(false)}
                >
                  <span className="ml-2">about</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 h-full flex items-center text-xs lowercase font-bold leading-snug  hover:opacity-75 hover:underline"
                  href="/work" onClick={() => setNavbarOpen(false)}
                >
                  <span className="ml-2">work</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 h-full flex items-center text-xs lowercase font-bold leading-snug  hover:opacity-75 hover:underline"
                  href="/recommendations" onClick={() => setNavbarOpen(false)}
                >
                  <span className="ml-2">recommendations</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 h-full flex items-center text-xs lowercase font-bold leading-snug  hover:opacity-75 hover:underline"
                  href="https://drive.google.com/file/d/1VKgJG9yX0BRM0KaLQ7970IKs30azwJdK/view?usp=sharing" target="_blank" onClick={() => setNavbarOpen(false)}
                >
                  <span className="ml-2">resume</span>
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="px-3 py-2 h-full flex items-center text-xs lowercase font-bold leading-snug  hover:opacity-75 hover:underline"
                  href="/privacy-policy" onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}
                >
                  <span className="ml-2">switch theme</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar