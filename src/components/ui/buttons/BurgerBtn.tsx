"use client";
import { useRecoilState } from "recoil";
import { menuActiveAtom } from "@/atoms";
import Image from "next/image";
import crossMenu from "../../../../public/crossMenu.svg";
import lines from "../../../../public/linesMenu.svg";

const Rows = ({ onClick }: any) => {
  return (
    <div onClick={onClick} className="h-10 w-10 cursor-pointer">
      <Image src={lines} alt="menu icon"></Image>
    </div>
  );
};

const Cross = ({ onClick }: any) => {
  return (
    <div onClick={onClick} className="h-10 w-10 cursor-pointer">
      <Image src={crossMenu} alt="menu icon"></Image>
    </div>
  );
};
const BurgerButton = () => {
  const [active, activeSetter] = useRecoilState(menuActiveAtom);
  const handleClick = () => {
    activeSetter(!active);
  };
  return !active ? (
    <Rows onClick={handleClick} />
  ) : (
    <Cross onClick={handleClick} />
  );
};

export { BurgerButton };
