import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import ToggleTheme from "./ToggleTheme";
type Props = {};

const Navbar = (props: Props) => {
  const { route } = useRouter();
  return (
    <nav className='container flex justify-between py-16'>
      <ToggleTheme />

      <ul className='absolute top-24 left-1/2 -translate-x-1/2 sm:relative sm:top-0  sm:left-0 sm:translate-x-0  sm:w-auto flex gap-3 justify-center items-center py-3 px-2 rounded-full bg-black text-sm'>
        <li>
          <Link
            href='/'
            className={` py-2 px-6 rounded-full ${
              route === "/" ? "bg-darkBg" : ""
            }`}>
            Home
          </Link>
        </li>
        <li>
          <Link href='/' className=' py-2 px-6 rounded-full'>
            Projects
          </Link>
        </li>
        <li>
          <Link href='/' className=' py-2 px-6 rounded-full'>
            Media
          </Link>
        </li>
      </ul>

      <a href='mailto:ashrafelshaer98@icloud.com'>Contact</a>
    </nav>
  );
};

export default Navbar;
