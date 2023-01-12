import React, { useEffect, useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { motion } from "framer-motion";



const initial = {
  opacity: 0,
  x: -50,
};
const animate = {
  opacity: 1,
  x: 0,
};

const ToggleTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = (): void => {
    document.querySelector("body")?.classList.toggle("dark");
    const isDarkMode = document
      .querySelector("body")
      ?.classList.contains("dark") as boolean;

    setIsDarkMode(isDarkMode);
  };
  useEffect(() => {
    const isDarkMode = document
      .querySelector("body")
      ?.classList.contains("dark") as boolean;

    setIsDarkMode(isDarkMode);
  }, []);
  return (
    <motion.button
      initial={initial}
      animate={animate}
      transition={{ duration: 0.4 }}>
      <label className='relative inline-flex items-center cursor-pointer'>
        <input
          type='checkbox'
          value=''
          className='sr-only peer'
          checked={isDarkMode}
          onChange={() => null}
        />
        <div
          onClick={toggleDarkMode}
          className='w-14 h-7 bg-gray peer-focus:outline-none  rounded-full peer  peer-checked:after:translate-x-full  after:content-[""] after:absolute after:top-0.5 after:left-[4px] after:bg-gray-light peer-checked:after:bg-gray-dark  after:rounded-full after:h-6 after:w-6 after:z-0 after:transition-all dark:border-gray-600 peer-checked:bg-black flex items-center justify-start peer-checked:justify-end px-2 '>
          {isDarkMode ? (
            <BsSunFill className='text-yellow-500 z-20 ' />
          ) : (
            <MdDarkMode className='text-theme-light z-20 ' />
          )}
        </div>
      </label>
    </motion.button>
  );
};

export default ToggleTheme;
