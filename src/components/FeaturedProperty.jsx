const FeaturedProperty = () => {
  return (
    <div className="md:max-w-[75%] md:mx-auto text-gray-800 px-4 pt-8">
      <h5 className="text-xl font-semibold mb-[15px]">Our Properties</h5>
      <div className="w-fullh-[200px] overflow-x-scroll whitespace-nowrap scrollbar-hide space-x-2">
        <div className="w-[180px] inline-block">
          <img
            className="w-full h-[140px] object-cover rounded-md"
            src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
            alt=""
          />
          <h5 className="text-md font-semibold text-gray-800">Hotels</h5>
          <p className="text-xs">230 Hotels</p>
        </div>

        <div className="w-[180px] inline-block">
          <img
            className="w-full h-[140px] object-cover rounded-md"
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
            alt=""
          />
          <h5 className="text-md font-semibold text-gray-800">Appartement</h5>
          <p className="text-xs">230 Appartement</p>
        </div>

        <div className="w-[180px] inline-block">
          <img
            className="w-full h-[140px] object-cover rounded-md"
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
            alt=""
          />
          <h5 className="text-md font-semibold text-gray-800">Resort</h5>
          <p className="text-xs">230 Resort</p>
        </div>

        <div className="w-[180px] inline-block">
          <img
            className="w-full h-[140px] object-cover rounded-md"
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
            alt=""
          />
          <h5 className="text-md font-semibold text-gray-800">Villas</h5>
          <p className="text-xs">230 Villas</p>
        </div>

        <div className="w-[180px] inline-block">
          <img
            className="w-full h-[140px] object-cover rounded-md"
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
            alt=""
          />
          <h5 className="text-md font-semibold text-gray-800">Cabins</h5>
          <p className="text-xs">230 Cabins</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperty;
