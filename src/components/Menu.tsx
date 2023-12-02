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
        <div>
          <ul className="flex sm:gap-2 items-center justify-center my-4 sm:my-0">
            <MenuLi route={"/profile"}>Mi Perfil</MenuLi>
            <MenuLi route={"/search"}>Buscar</MenuLi>
            <LogoutBtn></LogoutBtn>
          </ul>
        </div>
      )}
    </div>
  );
}
