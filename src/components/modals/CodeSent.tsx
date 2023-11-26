"use client";
import { useRecoilValue } from "recoil";
import { sentCodeAtom, userEmailAtom } from "@/atoms";
import Image from "next/image";
import cross from "../../../public/cross.svg";
export default function CodeSent() {
  const modalStatus = useRecoilValue(sentCodeAtom);
  const userEmail = useRecoilValue(userEmailAtom);
  const handleClick = () => {
    alert("hola");
  };
  return (
    modalStatus && (
      <div className="w-full absolute h-full bg-orange-500 flex justify-center items-center">
        <div className="absolute bg-red-200 h-60 w-2/3 rounded-xl flex  flex-col justify-between items-center text-teal-800 font-bold">
          <div className="w-full flex justify-end p-3">
            <Image
              alt="imagen de cross para cerrar modal"
              src={cross}
              height={25}
              width={25}
              className="hover:cursor-pointer"
              onClick={handleClick}
            ></Image>
          </div>
          <div className="h-full w-full flex justify-center items-center flex-col pb-6">
            <p>Hemos enviado tu codigo de verificacion a : </p>
            <p>{userEmail}</p>
          </div>
        </div>
      </div>
    )
  );
}
