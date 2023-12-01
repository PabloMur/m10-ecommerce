import LogoutBtn from "./ui/buttons/Logout";
import MenuLi from "./ui/buttons/MenuLi";
import { useRecoilValue } from "recoil";
import { userLoggedAtom } from "@/atoms";
import { useEffect, useState } from "react";

export default function Menu() {
  const [active, setActive] = useState(false);

  const activeFromAtom = useRecoilValue(userLoggedAtom);

  useEffect(() => {
    setActive(activeFromAtom);
  }, [activeFromAtom]);

  return (
    active && (
      <div>
        <ul className="flex gap-2 items-center justify-center">
          <MenuLi route={"/profile"}>Mi Perfil</MenuLi>
          <MenuLi route={"/search"}>Buscar</MenuLi>
          <LogoutBtn></LogoutBtn>
        </ul>
      </div>
    )
  );
}
