import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

type Props = {
  children: string | ReactNode;
  buttonType: string;
  styles?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  MotionProps;

type TButtonStyles = {
  [key: string]: string;
  primary: string;
  secondary: string;
};
const buttonTypes: TButtonStyles = {
  primary: "bg-gradient",
  secondary: "bg-gray dark:bg-black",
};

const Button = ({ children, buttonType, styles, ...motionProps }: Props) => {
  return (
    <motion.button
      {...motionProps}
      className={` text-sm pt-[10px] pb-[11px] px-[4px] rounded-full hover:scale-105 transition-all duration-300  ${buttonTypes[buttonType]} ${styles}`}>
      <span className='bg-gray dark:bg-black py-2 px-4 rounded-full 5'>
        {children}
      </span>
    </motion.button>
  );
};

export default Button;
