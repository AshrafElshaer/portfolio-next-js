import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "./Card";
import { BsArrowRightShort } from "react-icons/bs";

type Props = {
  socialMedia: { path: string; icon: ReactNode };
  backGround?: string;
  styles?:string;
};

const SocialMediaCard = ({
  socialMedia: { path, icon },
  backGround,
  styles
}: Props) => {
  return (
    <Card styles={`px-0 py-0 ${styles}`} backGround={backGround} >
      <Link
        href={path}
        className=' relative w-full h-full grid place-content-center '
        target='_blank'>
        {icon}
        <span>
          <BsArrowRightShort size='2rem' color='white' className="absolute bottom-4 right-4 bg-black rounded-full hover:ring-[6px] hover:ring-white/70 transition-all duration-[400ms]" />
        </span>
      </Link>
    </Card>
  );
};

export default SocialMediaCard;
