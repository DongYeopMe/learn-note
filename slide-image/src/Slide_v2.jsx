import React, { useState } from "react";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";
const imagePaths = [
  "/image/1.jpg",
  "/image/2.jpg",
  "/image/3.jpg",
  "/image/4.jpg",
];

function Slide_v2(props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="flex justify-center m-auto">
      <div
        id="show"
        className="w-[1000px] h-[300px] border-1 flex justify-center items-center"
      >
        <button className="hover:bg-gray-400 w-[40px] h-[40px] flex justify-center items-center rounded-full">
          <BiCaretLeft size={30} />
        </button>
        <img
          src={imagePaths[currentImageIndex]}
          alt="슬라이드 이미지"
          className="w-9/10 h-full"
        />
        <button className="hover:bg-gray-400 w-[40px] h-[40px] flex justify-center items-center rounded-full">
          <BiCaretRight size={30} />
        </button>
      </div>
    </div>
  );
}

export default Slide_v2;
