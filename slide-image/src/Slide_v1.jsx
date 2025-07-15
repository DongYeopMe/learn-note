import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Slide_v1(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const slides = [1, 2, 3, 4, 5];
  return (
    <div className="w-[500px]">
      <Slider {...settings} className="font-bold">
        {slides.map((item, index) => (
          <div key={index} className="px-4">
            <div className="bg-white shadow-lg rounded-2xl flex justify-center items-center h-64 text-4xl">
              {item}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slide_v1;
