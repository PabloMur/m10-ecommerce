"use client";
import { menuActiveAtom, userLoggedAtom } from "@/atoms";
import MenuLi from "./MenuLi";
import { useRecoilValue, useSetRecoilState } from "recoil";
export function ProfileBtn() {
  const userLogged = useRecoilValue(userLoggedAtom);
  const menuSetter = useSetRecoilState(menuActiveAtom);
  const handleClick = () => {
    menuSetter(false);
  };
  return (
    userLogged && (
      <div onClick={handleClick}>
        <MenuLi route={"/profile"}>Mi Perfil</MenuLi>
      </div>
    )
  );
}
