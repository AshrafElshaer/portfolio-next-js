import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const container = {
  in: {
    clipPath: "inset(0 0 0 0)",
    transition: { duration: 0.01 },
  },
  out: {
    clipPath: "inset(0 50% 0 50%)",
    transition: { duration: 0.8 },
  },
};

const PageTransition = ({ children }: Props) => {
  const { asPath } = useRouter();
  return (
    <AnimatePresence mode='popLayout'>
      <motion.main
        variants={container}
        animate='in'
        exit='out'
        key={asPath}
        style={{ transformOrigin: "center" }}>
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

export default PageTransition;
