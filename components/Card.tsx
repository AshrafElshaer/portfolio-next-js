import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  styles: string;
  backGround?: string;
};

const Card = ({ children, styles, backGround }: Props) => {
  return (
    <div
      className={`${
        backGround ? backGround : "bg-white dark:bg-gray-dark"
      }  rounded-2xl overflow-hidden ${styles} p-6`}>
      {children}
    </div>
  );
};

export default Card;
