import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  styles:string
};

const Card = ({ children, styles }: Props) => {
  return <div className={`bg-white dark:bg-gray-dark  rounded-2xl overflow-hidden ${styles} p-6` }>{children}</div>;
};

export default Card;
