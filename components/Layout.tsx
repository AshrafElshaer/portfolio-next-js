import React, { ReactNode } from "react";
import Navbar from "./Navbar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-gray-light dark:bg-darkBg text-theme-lgith dark:text-theme-dark transition-all duration-300">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
