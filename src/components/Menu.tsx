"use client";
import LogoutBtn from "./ui/buttons/Logout";
import MenuLi from "./ui/buttons/MenuLi";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { menuActiveAtom } from "@/atoms";
import LoginBtn from "./ui/buttons/LoginBtn";
import { ProfileBtn } from "./ui/buttons/ProfileButton";

export default function Menu() {
  const menuActive = useRecoilValue(menuActiveAtom);
  const menuSetter = useSetRecoilState(menuActiveAtom);
  const handleClick = () => {
    menuSetter(false);
  };
  return (
    menuActive && (
      <div className="bg-black absolute top-[12vh] right-0 z-20 w-full p-5 h-[80vh] sm:h-[90vh] sm:w-1/4">
        <ul className="flex flex-col gap-10 items-center justify-center h-[100%]">
          <ProfileBtn></ProfileBtn>
          <div onClick={handleClick}>
            <MenuLi route={"/search"}>Buscar</MenuLi>
          </div>
          <LogoutBtn></LogoutBtn>
          <LoginBtn></LoginBtn>
        </ul>
      </div>
    )
  );
}
