import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "./Card";
import { BsArrowRightShort } from "react-icons/bs";

type Props = {
  socialMedia: { path: string; icon: ReactNode };
  backGround?: string;
};

const SocialMediaCard = ({ socialMedia: { path, icon }, backGround }: Props) => {
  return (
    <Card styles={`px-0 py-0  bg-gray-dark `} backGround={backGround}>
      <Link
        href={path}
        className='w-full h-full grid place-content-center '
        target='_blank'>
        {icon}
      </Link>
    </Card>
  );
};

export default SocialMediaCard;
