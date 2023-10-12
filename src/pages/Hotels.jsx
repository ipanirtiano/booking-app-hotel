import { useState } from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import { AiOutlineArrowDown } from "react-icons/ai";
import HotelItems from "../components/HotelItems";
import Footer from "../components/Footer";

const Hotels = () => {
  //state setopen
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full space-y-2 bg-red-200 bg-gradient-to-r from-cyan-500 fixed top-0 py-3 z-[100] text-white">
        <Navbar />
        <div
          className={`${
            open ? "top-[40px]" : "top-[-1000px]"
          } w-full fixed  md:static transition-all duration-30`}
        >
          <Search />
        </div>

        <div className="justify-center absolute bottom-[-30%] left-[50%] translate-x-[-50%] md:hidden">
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center justify-center rounded-full w-8 h-8 border border-gray-200 bg-white"
          >
            <AiOutlineArrowDown className="text-2xl text-gray-600" />
          </div>
        </div>
      </div>

      {/* content */}
      <div className="md:max-w-[75%] md:mx-auto text-gray-800 px-4 md:mt-[128px] mt-[78px] space-y-3 pb-5">
        <HotelItems />
        <HotelItems />
        <HotelItems />
        <HotelItems />
        <HotelItems />
        <HotelItems />
        <HotelItems />
        <HotelItems />
        <HotelItems />
        <HotelItems />
      </div>

      <Footer />
    </>
  );
};

export default Hotels;
