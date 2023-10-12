import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between md:max-w-[75%] md:mx-auto px-4">
      <Link to={"/"} className="font-semibold md:text-xl text-base">
        My Booking
      </Link>
      {/* <button className="md:px-4 md:py-[7px] px-[15px] py-[6px] text-gray-600 bg-white rounded-full text-sm">
          Login
        </button> */}
      <div className="cursor-pointer flex items-center space-x-1">
        <p className="hover:underline">Login</p>
      </div>
    </nav>
  );
};

export default Navbar;
