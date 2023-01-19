import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
type Props = {
  children: ReactNode | ReactNode[];
  styles: string;
};

function Main({ children, styles }: Props) {
  return (
    <motion.main
      variants={containerVariant}
      initial='hidden'
      animate='show'
      className={`container py-4 overflow-y-hidden min-h-[calc(100vh-156px)] ${styles}`}>
      {children}
    </motion.main>
  );
}

export default Main;
