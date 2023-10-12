import { FaBed, FaPlane } from "react-icons/fa";
import { IoCarSportSharp } from "react-icons/io5";

const Menu = () => {
  return (
    <div className="w-full flex items-center gap-3 text-white overflow-x-auto scrollbar-hide">
      <button className="text-xs md:text-sm px-4 py-[6px] bg-white text-gray-600 border-2 border-white rounded-full flex items-center gap-2">
        <FaBed />
        <p>Stays</p>
      </button>
      <button className="text-xs md:text-sm px-4 py-[6px] border-2 border-white rounded-full flex items-center gap-2">
        <FaPlane />
        <p>Flights</p>
      </button>
      <button className="text-xs md:text-sm px-4 py-[6px] border-2 border-white rounded-full flex items-center gap-2">
        <IoCarSportSharp />
        <p>Cars</p>
      </button>
      <button className="text-xs md:text-sm px-4 py-[6px] border-2 border-white rounded-full flex items-center gap-2">
        <FaBed />
        <p>Appartement</p>
      </button>
    </div>
  );
};

export default Menu;
