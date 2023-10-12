import Menu from "./Menu";
import Search from "./Search";

const Header = () => {
  return (
    <>
      <div className="w-full md:h-[60vh] h-[40vh] banner pt-[70px] text-white relative mb-[160px] md:mb-[40px] sm:mb-[250px]">
        <div className="md:max-w-[75%] md:mx-auto px-4">
          <Menu />

          <div className="md:mt-[50px] mt-[17px] space-y-2 ">
            <p className="md:text-[32px] text-xl font-semibold">
              Booking any your plan here.
            </p>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              voluptate.
            </p>
          </div>
          <div className="w-full md:absolute md:bottom-[-20px] md:left-0 mt-[15px] md:mt-0">
            <Search />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
