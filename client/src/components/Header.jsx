import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md ">
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        {/* log */}
        <Link to='/' className="text-bold text-sm sm:text-xl">
          <span className="text-green-500">Real</span>
          <span>Marketplace</span>
        </Link>
        <form className="bg-slate-100 p-2 rounded-lg flex flex-row items-center ">
          <input
            type="text"
            placeholder="search"
            className="bg-transparent focus: outline-none w-24 sm:w-64"
          />
          <FaSearch />
        </form>
        {/* menu */}
        <ul className="flex flex-row gap-4">
            <Link to='/' className="hidden sm:inline text-slate-700  hover:cursor-pointer hover:font-bold">Home</Link>
            <Link to='/about' className="hidden sm:inline text-slate-700 hover:cursor-pointer hover:font-bold" > About</Link>
            <Link to='/sign-in' className="hover: cursor-pointer text-slate-700  hover:font-bold">SignIn</Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
