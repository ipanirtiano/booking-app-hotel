import { IoLocationSharp } from "react-icons/io5";
import { LiaHotelSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

const HotelItems = () => {
  const navigate = useNavigate();

  const handleDetailsHotel = () => {
    navigate("/hotels/1");
  };

  return (
    <div onClick={handleDetailsHotel} className="w-full">
      <div className="w-full md:h-[200px] h-[90px] flex border border-gray-200 rounded-md p-2 md:gap-5 gap-3">
        {/* image property */}
        <div className="flex gap-1 md:w-[350px] w-[120px]">
          <div className="md:w-[70%] w-full bg-gray-300">
            <img
              className="w-full h-full object-cover"
              src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
              alt=""
            />
          </div>
          <div className="hidden md:block w-[30%] space-y-1 overflow-y-scroll whitespace-nowrap scrollbar-hide">
            <div className="w-full h-[80px] bg-red-900">
              <img
                className="w-full h-full object-cover"
                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
                alt=""
              />
            </div>
            <div className="w-full h-[80px] bg-red-900">
              <img
                className="w-full h-full object-cover"
                src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
                alt=""
              />
            </div>
            <div className="w-full h-[80px] bg-red-900">
              <img
                className="w-full h-full object-cover"
                src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
                alt=""
              />
            </div>
          </div>
        </div>
        {/* end image property */}

        {/* detail property */}
        <div className="w-[350px] h-full text-gray-600 md:space-y-2">
          <h4 className="md:text-2xl font-semibold line-clamp-1">
            Aparthotel Stare Miasto
          </h4>

          <div className="flex items-center gap-2">
            <LiaHotelSolid className="text-xs hidden md:block" />
            <p className="text-xs">Hotels</p>
          </div>

          <div className="flex items-center gap-2">
            <IoLocationSharp className="text-xs hidden md:block" />
            <p className="text-xs">Jakarta Selatan Jl. lorem no. 25</p>
          </div>

          <div className="hidden md:block">
            <p className="text-sm font-semibold">
              Studio Apartment with Air conditioning
            </p>
            <p className="text-xs">
              Entire studio • 1 bathroom • 21m² 1 full bed
            </p>
          </div>

          <div className="hidden md:block">
            <p className="text-sm text-green-700 font-semibold">
              Free cancellation
            </p>

            <p className="text-xs text-green-700">
              You can cancel later, so lock in this great price today!
            </p>
          </div>
        </div>

        {/* price detail */}
        <div className="w-[200px] h-full relative">
          <div className="w-full flex items-center justify-end ">
            <div className="flex items-center gap-2">
              <p className="font-semibold text-xs md:text-sm">Excelent</p>
              <div className="p-1 bg-blue-800 text-white text-xs md:text-sm">
                8.9
              </div>
            </div>

            <div className="absolute bottom-0">
              <p className=" font-semibold text-xs md:text-xl">
                IDR. 1.200.000
              </p>
              <p className="text-xs text-gray-400 text-right hidden md:block md:mb-2">
                Includes taxes and fees
              </p>
              <div className="w-full">
                <button className="w-full rounded-sm text-xs md:py-2 py-1 text-center bg-blue-700 text-white">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelItems;
