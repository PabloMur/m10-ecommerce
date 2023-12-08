"use client";
import LogoutBtn from "./ui/buttons/Logout";
import MenuLi from "./ui/buttons/MenuLi";
import { useRecoilValue } from "recoil";
import { menuActiveAtom, userLoggedAtom } from "@/atoms";
import LoginBtn from "./ui/buttons/LoginBtn";
import { ProfileBtn } from "./ui/buttons/ProfileButton";

export default function Menu() {
  const activeFromAtom = useRecoilValue(userLoggedAtom);
  const menuActive = useRecoilValue(menuActiveAtom);
  return (
    menuActive && (
      <div className="bg-black absolute top-[12vh] right-0 z-10 w-full p-5 h-[80vh] sm:h-[90vh] sm:w-1/4">
        <ul className="flex flex-col gap-10 items-center justify-center h-[100%]">
          <ProfileBtn></ProfileBtn>
          <MenuLi route={"/search"}>Buscar</MenuLi>
          <LogoutBtn></LogoutBtn>
          <LoginBtn></LoginBtn>
        </ul>
      </div>
    )
  );
}
