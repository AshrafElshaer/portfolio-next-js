import Image from "next/image";
import React, { useState } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

type Props = {
  gallery: string[];
  name: string;
};

function Carousel({ gallery, name }: Props) {
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  function handlePrevious() {
    setCurrentIdx((prev) => (prev === 0 ? prev : prev - 1));
  }
  function handleNext() {
    setCurrentIdx((prev) => (prev !== gallery.length - 1 ? prev + 1 : prev));
  }
  return (
    <div className='w-full h-full relative flex overflow-hidden'>
      {gallery.map((img, idx) => (
        <Image
          key={idx}
          src={img}
          alt={name}
          className={`imgPreview rounded-xl absolute top-0 left-0 transition-transform duration-300  ${
            idx !== currentIdx ? "translate-x-full" : ""
          } `}
          width={0}
          height={0}
          sizes='100%'
        />
      ))}
      <button
        className='absolute top-1/2 -translate-y-1/2 right-1 z-20 bg-black/40 rounded-full text-white p-2 text-xl'
        onClick={handleNext}>
        <FaGreaterThan size='0.75rem' />
      </button>
      <button
        className='absolute top-1/2 -translate-y-1/2 left-1 z-20 bg-black/40 rounded-full text-white p-2 text-xl'
        onClick={handlePrevious}>
        <FaLessThan size='0.75rem' />
      </button>
    </div>
  );
}

export default Carousel;
