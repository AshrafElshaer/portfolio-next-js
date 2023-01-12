import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Card = ({ children }: Props) => {
  return <div className='bg-white dark:bg-gray-dark p-6 rounded-2xl'>{children}</div>;
};

export default Card;
