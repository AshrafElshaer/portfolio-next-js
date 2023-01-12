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
    <nav className='container flex justify-between items-center py-16'>
      <ToggleTheme />

      <motion.ul
        variants={container}
        initial='hidden'
        animate='show'
        className='absolute top-24 left-1/2 -translate-x-1/2 sm:relative sm:top-0  sm:left-0 sm:translate-x-0  sm:w-auto flex gap-3 justify-center items-center py-3 px-2 rounded-full bg-gray dark:bg-black text-sm'>
        <motion.li variants={listItem}>
          <Link
            href='/'
            className={` py-2 px-6 rounded-full ${
              route === "/" ? " bg-gray-light dark:bg-darkBg" : ""
            }`}>
            Home
          </Link>
        </motion.li>
        <motion.li variants={listItem}>
          <Link href='/' className=' py-2 px-6 rounded-full'>
            Projects
          </Link>
        </motion.li>
        <motion.li variants={listItem}>
          <Link href='/' className=' py-2 px-6 rounded-full'>
            Media
          </Link>
        </motion.li>
      </motion.ul>
      <Button>
        <a href='mailto:ashrafelshaer98@icloud.com'>Contact</a>
      </Button>
    </nav>
  );
};

export default Navbar;
