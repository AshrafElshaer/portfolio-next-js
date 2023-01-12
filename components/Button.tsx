import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

type Props = {
  children: string | ReactNode;
  buttonType: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  MotionProps;

type TButtonStyles = {
  [key: string]: string;
  primary: string;
  secondary: string;
};
const buttonTypes: TButtonStyles = {
  primary: "bg-gradient",
  secondary: "bg-none",
};

const Button = ({ children, buttonType, ...motionProps }: Props) => {
  return (
    <motion.button
      {...motionProps}
      className={` py-2 px-[2px] rounded-full hover:scale-105  ${buttonTypes[buttonType]}`}>
      <span className='bg-gray dark:bg-black py-2 px-4 rounded-full 5'>
        {children}
      </span>
    </motion.button>
  );
};

export default Button;
