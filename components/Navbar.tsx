"use-client";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import ToggleTheme from "./ToggleTheme";
import Button from "./Button";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const listItem = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};
const Navbar = () => {
  const { route } = useRouter();
  return (
    <nav className='container flex justify-between items-center pb-16 pt-12 text-sm'>
      <ToggleTheme />

      <motion.ul
        variants={container}
        initial='hidden'
        animate='show'
        className='absolute top-24 left-1/2 -translate-x-1/2 sm:relative sm:top-0  sm:left-0 sm:translate-x-0  sm:w-auto flex gap-3 justify-center items-center py-3 px-2 rounded-full bg-gray dark:bg-black '>
        <motion.li variants={listItem}>
          <Link
            href='/'
            className={` py-2 px-6 rounded-full transition-all duration-200 ${
              route === "/" ? " bg-gray-light dark:bg-darkBg" : ""
            }`}>
            Home
          </Link>
        </motion.li>
        <motion.li variants={listItem}>
          <Link
            href='/projects'
            className={` py-2 px-6 rounded-full transition-all duration-200 ${
              route === "/projects" ? " bg-gray-light dark:bg-darkBg" : ""
            }`}>
            Projects
          </Link>
        </motion.li>
        <motion.li variants={listItem}>
          <Link
            href='/media'
            className={` py-2 px-6 rounded-full transition-all duration-200 ${
              route === "/media" ? " bg-gray-light dark:bg-darkBg" : ""
            }`}>
            Media
          </Link>
        </motion.li>
      </motion.ul>
      <Button
        buttonType='primary'
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}>
        <a href='mailto:ashrafelshaer98@icloud.com'>Contact</a>
      </Button>
    </nav>
  );
};

export default Navbar;
