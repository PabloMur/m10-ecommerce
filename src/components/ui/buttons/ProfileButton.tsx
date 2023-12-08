"use client";
import { userLoggedAtom } from "@/atoms";
import MenuLi from "./MenuLi";
import { useRecoilValue } from "recoil";
export function ProfileBtn() {
  const userLogged = useRecoilValue(userLoggedAtom);
  return (
    userLogged && (
      <div>
        <MenuLi route={"/profile"}>Mi Perfil</MenuLi>
      </div>
    )
  );
}
