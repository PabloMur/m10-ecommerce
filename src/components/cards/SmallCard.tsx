"use client";
import Image from "next/image";
import imageTest from "../../../public/banner.jpg";
import { useGoTo } from "@/hooks";
export default function SmallCard({ title, price, id, image, alt }: any) {
  const goto = useGoTo();
  const handleClick = () => {
    const route = `/product/${id}`;
    goto(route);
  };
  return (
    <div
      className="bg-green-100 w-56 h-64 flex flex-col items-center justify-between m-3 rounded-3xl overflow-hidden"
      onClick={handleClick}
    >
      <div className="bg-red-300 overflow-hidden w-full h-4/5 flex items-center justify-center">
        <Image src={imageTest} alt={alt} width={250} height={100} />
      </div>
      <div className="flex items-center justify-between w-full p-5">
        <div>
          <p>{title}</p>
        </div>
        <div>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
}
