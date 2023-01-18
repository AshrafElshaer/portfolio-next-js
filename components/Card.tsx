import React, { ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

type Props = {
  children: ReactNode;
  styles?: string;
  backGround?: string;
} & MotionProps;

const Card = ({ children, styles, backGround, ...mothioProps }: Props) => {
  return (
    <motion.div
      className={`${
        backGround ? backGround : "bg-white dark:bg-gray-dark"
      }  rounded-2xl overflow-hidden ${styles} p-6`}
      {...mothioProps}>
      {children}
    </motion.div>
  );
};

export default Card;
