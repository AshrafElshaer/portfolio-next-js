import React, { ReactNode } from "react";

type Props = {
  children: string | ReactNode;
};

const Button = ({ children }: Props) => {
  return (
    <button className=' py-2 px-[2px] bg-gradient rounded-full'>
      <span className='bg-gray dark:bg-black py-2 px-4 rounded-full'>{children}</span>
    </button>
  );
};

export default Button;
