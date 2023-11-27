import LogoutBtn from "./ui/buttons/Logout";
import MenuLi from "./ui/buttons/MenuLi";
import { useRecoilValue } from "recoil";
import { userLoggedAtom } from "@/atoms";
export default function Menu() {
  const active = useRecoilValue(userLoggedAtom);
  return (
    active && (
      <menu>
        <ul className="flex gap-2 items-center justify-center">
          <MenuLi route={"/profile"}>Mi Perfil</MenuLi>
          <MenuLi route={"/search"}>Buscar</MenuLi>
          <LogoutBtn></LogoutBtn>
        </ul>
      </menu>
    )
  );
}
