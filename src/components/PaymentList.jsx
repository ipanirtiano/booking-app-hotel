import atmBersama from "../assets/payment/atm_bersama.png";
import bca from "../assets/payment/bca.png";
import bni from "../assets/payment/bni.png";
import bri from "../assets/payment/bri.png";
import creditCard from "../assets/payment/creditcard.png";
import mandiri from "../assets/payment/mandiri.png";
import visa from "../assets/payment/visa.png";

const PaymentList = () => {
  return (
    <div className="flex flex-wrap items-center gap-8 md:max-w-[75%] md:mx-auto text-gray-800 px-4 py-10 mt-[38px] border-t border-gray-300 border-b mb-[20px]">
      <div className="md:w-[360px]">
        <p className="text-2xl font-semibold py-3">Official Payment Partner</p>
        <p className="text-gray-700 text-sm">
          We work with various trusted payment service providers so you can make
          transactions safely and smoothly!
        </p>
      </div>

      <div className="flex items-center gap-6 flex-wrap">
        <div className="w-[80px]">
          <img className="w-full object-fit" src={bni} alt="" />
        </div>
        <div className="w-[80px]">
          <img className="w-full" src={bca} alt="" />
        </div>
        <div className="w-[80px]">
          <img className="w-full" src={bri} alt="" />
        </div>
        <div className="w-[80px]">
          <img className="w-full" src={mandiri} alt="" />
        </div>
        <div className="w-[80px]">
          <img className="w-full" src={creditCard} alt="" />
        </div>
        <div className="w-[80px]">
          <img className="w-full" src={atmBersama} alt="" />
        </div>
        <div className="w-[80px]">
          <img className="w-full" src={visa} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PaymentList;
