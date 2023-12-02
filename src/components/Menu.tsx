"use client";
import LogoutBtn from "./ui/buttons/Logout";
import MenuLi from "./ui/buttons/MenuLi";
import { useRecoilValue } from "recoil";
import { userLoggedAtom } from "@/atoms";

export default function Menu() {
  const activeFromAtom = useRecoilValue(userLoggedAtom);

  return (
    <div>
      {activeFromAtom && (
        <div id="menu">
          <ul className="flex gap-2 items-center justify-center">
            <MenuLi route={"/profile"}>Mi Perfil</MenuLi>
            <MenuLi route={"/search"}>Buscar</MenuLi>
            <LogoutBtn></LogoutBtn>
          </ul>
        </div>
      )}
    </div>
  );
}
