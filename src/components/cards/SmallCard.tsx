"use client";
import Image from "next/image";
import { useGoTo } from "@/hooks";

type SmallCardType = {
  title?: string;
  price?: string;
  id?: string;
  image?: any;
  alt: string;
};
export default function SmallCard({
  title,
  price,
  id,
  image,
  alt,
}: SmallCardType) {
  const goto = useGoTo();
  const handleClick = () => {
    const route = `/product/${id}`;
    goto(route);
  };
  return (
    <div
      className=" w-64 h-64 flex flex-col items-center justify-between m-3 rounded-xl overflow-hidden cursor-pointer border-2 shadow-sm"
      onClick={handleClick}
    >
      <div className="overflow-hidden w-full h-full flex items-center justify-center bg-white">
        <Image src={image} alt={alt} width={130} height={100} />
      </div>
      <div className="flex items-center justify-between w-full p-5 bg-teal-800">
        <div>
          <h4 className="font-bold text-white">{title}</h4>
        </div>
        <div>
          <p className="text-white">${price}</p>
        </div>
      </div>
    </div>
  );
}
