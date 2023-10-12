/* eslint-disable no-unused-vars */
import { FaBed, FaChild, FaMapMarkerAlt } from "react-icons/fa";
import { FaChildren } from "react-icons/fa6";
import { BsCalendarDate } from "react-icons/bs";
import { BiUserPlus } from "react-icons/bi";
import { MdFamilyRestroom } from "react-icons/md";
import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom";

const Search = () => {
  //use navigate
  const navigate = useNavigate();
  //state opendate
  const [openDate, setOpenDate] = useState(false);
  //state destinations
  const [destination, setDestinations] = useState("");
  //state open options
  const [openOptions, setOpenOptions] = useState(false);
  //state date
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  // state options
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  // function handle options
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  // funtion handle search
  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="flex flex-wrap items-center justify-between md:max-w-[75%] py-2 md:mx-auto px-4 bg-white border border-gray-300 lg:rounded-full rounded-md lg:space-y-0 space-y-2 relative">
      {/* city */}
      <div className="flex items-center gap-2 lg:border-none border-b border-gray-300 lg:w-[30%] w-full lg:pt-0 lg:pb-0 pt-3 pb-2 lg:pt-0 lg:pb-0">
        <FaMapMarkerAlt className="text-gray-600" />
        <input
          type="text"
          className="bg-transparent text-sm border-none outline-none text-gray-600 placeholder:text-sm"
          placeholder="Enter a City, or Hotel"
          onChange={(e) => setDestinations(e.target.value)}
        />
      </div>

      {/* date */}
      <div className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer lg:border-none border-b border-gray-300 lg:w-[35%] w-full pt-3 pb-2 lg:pt-0 lg:pb-0 relative">
        <div
          onClick={() => setOpenDate(!openDate)}
          className="flex items-center gap-2"
        >
          <BsCalendarDate className="text-gray-600" />
          <p>{format(date[0].startDate, "dd/MMM/yyyy")}</p>
        </div>
        <p>-</p>
        <div
          onClick={() => setOpenDate(!openDate)}
          className="flex items-center gap-2"
        >
          <p>{format(date[0].endDate, "dd/MMM/yyyy")}</p>
        </div>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="absolute top-[43px] lg:top-[33px] right-0 left-0 z-[100] border border-gray-300"
            minDate={new Date()}
          />
        )}
      </div>

      {/* options */}
      <div className="flex items-center gap-2 lg:border-none border-b text-gray-600 cursor-pointer border-gray-300 lg:w-[25%] w-full pt-3 pb-2 lg:pt-0 lg:pb-0 lg:pt-0 lg:pb-0 relative">
        <MdFamilyRestroom className="text-gray-600" />
        <div
          onClick={() => setOpenOptions(!openOptions)}
          className="text-sm"
        >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</div>

        {openOptions && (
          <div className="z-[90] absolute top-[43px] lg:top-[33px] bg-white border border-gray-300 w-full p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaChild />
                <p>Adult</p>
              </div>

              <div className="flex items-center gap-1">
                <button
                  disabled={options.adult <= 1}
                  onClick={() => handleOption("adult", "d")}
                  className="text-xs px-2 py-1 bg-gray-100 border border-gray-300 text-gray-800"
                >
                  -
                </button>
                <p className="text-xs px-2 py-1 bg-white text-gray-800">
                  {options.adult}
                </p>
                <button
                  onClick={() => handleOption("adult", "i")}
                  className="text-xs px-2 py-1 bg-gray-100 border border-gray-300 text-gray-800"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaChildren />
                <p>Children</p>
              </div>

              <div className="flex items-center gap-1">
                <button
                  disabled={options.children <= 0}
                  onClick={() => handleOption("children", "d")}
                  className="text-xs px-2 py-1 bg-gray-100 border border-gray-300 text-gray-800"
                >
                  -
                </button>
                <p className="text-xs px-2 py-1 bg-white text-gray-800">
                  {options.children}
                </p>
                <button
                  onClick={() => handleOption("children", "i")}
                  className="text-xs px-2 py-1 bg-gray-100 border border-gray-300 text-gray-800"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaBed />
                <p>Room</p>
              </div>

              <div className="flex items-center gap-1">
                <button
                  disabled={options.room <= 1}
                  onClick={() => handleOption("room", "d")}
                  className="text-xs px-2 py-1 bg-gray-100 border border-gray-300 text-gray-800"
                >
                  -
                </button>
                <p className="text-xs px-2 py-1 bg-white text-gray-800">
                  {options.room}
                </p>
                <button
                  onClick={() => handleOption("room", "i")}
                  className="text-xs px-2 py-1 bg-gray-100 border border-gray-300 text-gray-800"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <button
        onClick={handleSearch}
        className="px-4 py-[6px] text-sm bg-blue-900 text-white rounded-full"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
