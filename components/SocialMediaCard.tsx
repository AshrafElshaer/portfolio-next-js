import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "./Card";
import { BsArrowRightShort } from "react-icons/bs";

type Props = {
  socialMedia: { path: string; icon: ReactNode };
  backGround?: string;
};

const SocialMediaCard = ({
  socialMedia: { path, icon },
  backGround,
}: Props) => {
  return (
    <Card styles={`px-0 py-0  bg-gray-dark `} backGround={backGround}>
      <Link
        href={path}
        className=' relative w-full h-full grid place-content-center '
        target='_blank'>
        {icon}
        <span>
          <BsArrowRightShort size='2rem' color='white' className="absolute bottom-8 right-8 bg-black rounded-full hover:ring-8 hover:ring-white/70 transition-all duration-[400ms]" />
        </span>
      </Link>
    </Card>
  );
};

export default SocialMediaCard;
