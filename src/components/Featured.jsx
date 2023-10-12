const Featured = () => {
  return (
    <div className="md:max-w-[75%] md:mx-auto text-gray-800 flex items-center justify-between px-4">
      <div className="w-[32%] md:h-[220px] h-[150px] bg-gray-100 rounded-md overflow-hidden relative bg-gradient-to-b from-black">
        <img
          className="w-full h-full object-cover"
          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          alt=""
        />
        <div className="absolute bottom-[10px] md:left-4 left-2">
          <p className="text-white md:text-3xl text-xl font-semibold">Nature</p>
          <p className=" text-white md:text-base text-xs line-clamp-1 md:line-clamp-none">
            Lorem ipsum dolor sit.
          </p>
        </div>
      </div>
      <div className="w-[32%] md:h-[220px] h-[150px] bg-gray-100 rounded-md overflow-hidden relative">
        <img
          className="w-full h-full object-cover"
          src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
          alt=""
        />
        <div className="absolute bottom-[10px] md:left-4 left-2">
          <p className="text-white md:text-3xl text-xl font-semibold">Stays</p>
          <p className=" text-white md:text-base text-xs line-clamp-1 md:line-clamp-none">
            Lorem ipsum dolor sit.
          </p>
        </div>
      </div>
      <div className="w-[32%] md:h-[220px] h-[150px] bg-gray-100 rounded-md overflow-hidden relative">
        <img
          className="w-full h-full object-cover"
          src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
          alt=""
        />
        <div className="absolute bottom-[10px] md:left-4 left-2">
          <p className="text-white md:text-3xl text-xl font-semibold">Travel</p>
          <p className=" text-white md:text-base text-xs line-clamp-1 md:line-clamp-none">
            Lorem ipsum dolor sit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
