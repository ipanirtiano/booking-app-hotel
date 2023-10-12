import AppartementList from "../components/AppartementList";
import Featured from "../components/Featured";
import FeaturedProperty from "../components/FeaturedProperty";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HotelsList from "../components/HotelsList";
import Navbar from "../components/Navbar";
import PaymentList from "../components/PaymentList";
import { useEffect, useState } from "react";

const Home = () => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <>
      <div
        className={`${
          isActive
            ? "bg-red-200 bg-gradient-to-r bg-blue-800 from-cyan-500"
            : ""
        } w-full fixed top-0 py-3 z-[100] text-white`}
      >
        <Navbar />
      </div>

      <Header />
      <Featured />
      <FeaturedProperty />
      <HotelsList />
      <AppartementList />
      <PaymentList />
      <Footer />
    </>
  );
};

export default Home;
