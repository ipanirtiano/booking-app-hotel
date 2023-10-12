import { IoLocationSharp } from "react-icons/io5";
import Navbar from "../components/Navbar";
import { LiaHotelSolid } from "react-icons/lia";
import Footer from "../components/Footer";
import PaymentList from "../components/PaymentList";

const DetailsHotel = () => {
  return (
    <>
      <div className="w-full space-y-2 bg-red-200 bg-gradient-to-r from-cyan-500 fixed top-0 py-2 z-[100] text-white">
        <Navbar />
        <div
          className={`w-full fixed  md:static transition-all duration-30`}
        ></div>
      </div>

      {/* content */}
      <div className="md:max-w-[75%] md:mx-auto text-gray-800 px-4 md:mt-[78px] mt-[50px] space-y-1 pb-5">
        <div className="flex items-center justify-between w-full flex-wrap space-y-2 mb-3">
          <h4 className="text-3xl font-semibold text-gray-700">
            Tower Street Apartments
          </h4>

          <button className="py-2 px-4 text-white bg-blue-800 text-sm rounded-sm">
            Booking Now
          </button>
        </div>

        <div className="flex items-center gap-2">
          <LiaHotelSolid className="text-xs " />
          <p className="text-xs">Hotels</p>
        </div>
        <div className="flex items-center gap-2">
          <IoLocationSharp className="text-sm " />
          <p className="text-sm">Jakarta Selatan Jl. lorem no. 25</p>
        </div>
        <div className="">
          <p className="text-sm font-semibold">
            Studio Apartment with Air conditioning
          </p>
          <p className="text-xs">
            Entire studio • 1 bathroom • 21m² 1 full bed
          </p>
        </div>

        {/* galery photo */}
        <div className="flex flex-wrap w-full gap-3 pt-[20px]">
          <div className="md:w-[295px] w-full h-[200px] bg-gray-200">
            <img
              className="w-full h-full object-cover"
              src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1"
              alt=""
            />
          </div>
          <div className="md:w-[295px] w-full h-[200px] bg-gray-200">
            <img
              className="w-full h-full object-cover"
              src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
              alt=""
            />
          </div>
          <div className="md:w-[295px] w-full h-[200px] bg-gray-200">
            <img
              className="w-full h-full object-cover"
              src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1"
              alt=""
            />
          </div>
          <div className="md:w-[295px] w-full h-[200px] bg-gray-200">
            <img
              className="w-full h-full object-cover"
              src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1"
              alt=""
            />
          </div>
          <div className="md:w-[295px] w-full h-[200px] bg-gray-200">
            <img
              className="w-full h-full object-cover"
              src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1"
              alt=""
            />
          </div>
          <div className="md:w-[295px] w-full h-[200px] bg-gray-200">
            <img
              className="w-full h-full object-cover"
              src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1"
              alt=""
            />
          </div>
        </div>

        {/* description */}

        <div className="flex flex-wrap w-full gap-2 pt-[20px] justify-between">
          <div className="md:w-[65%] w-full">
            <h4 className="text-2xl font-semibold mb-3">
              Stay in the heart of City
            </h4>
            <p className="text-justify">
              Located a 5-minute walk from St. Florians Gate in Krakow, Tower
              Street Apartments has accommodations with air conditioning and
              free WiFi. The units come with hardwood floors and feature a fully
              equipped kitchenette with a microwave, a flat-screen TV, and a
              private bathroom with shower and a hairdryer. A fridge is also
              offered, as well as an electric tea pot and a coffee machine.
              Popular points of interest near the apartment include Cloth Hall,
              Main Market Square and Town Hall Tower. The nearest airport is
              John Paul II International Kraków–Balice, 16.1 km from Tower
              Street Apartments, and the property offers a paid airport shuttle
              service.
            </p>
          </div>

          <div className="mt-[20px] md:mt-0 md:w-[30%] h-[220px] py-4 px-4 w-full bg-slate-100 rounded-lg border border-gray-200 shadow-md">
            <div className="relative h-full">
              <p className="text-xl w-full font-semibold mb-2">
                Perfect for night stay!
              </p>
              <p className="text-sm text-gray-500">
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </p>
              <div className="absolute bottom-0 w-full">
                <div className="flex justify-end">
                  <p className="text-xl font-semibold">IDR. 1.200.000</p>
                </div>
                <p className="text-xs text-gray-400 text-right mb-3">
                  *Includes taxes and fees
                </p>
                <button className="py-2 px-4 text-sm text-white bg-blue-800 w-full">
                  Booking Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="mt-[30px]">
        <PaymentList />
        <Footer />
      </div>
    </>
  );
};

export default DetailsHotel;
