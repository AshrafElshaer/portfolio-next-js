import React, { useEffect } from "react";

type Props = {};

const Navbar = (props: Props) => {
  const toggleDarkMode = (): void => {
    document.querySelector("body")?.classList.toggle("dark");
  };

  return (
    <div className='text-light dark:text-dark'>
      Navbar
      <button onClick={toggleDarkMode}>switch</button>
    </div>
  );
};

export default Navbar;
