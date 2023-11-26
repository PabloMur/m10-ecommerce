import LogoutBtn from "./ui/buttons/Logout";
import MenuLi from "./ui/buttons/MenuLi";
export default function Menu() {
  return (
    <menu>
      <ul className="flex gap-2 items-center justify-center">
        <MenuLi route={"/profile"}>Mi Perfil</MenuLi>
        <MenuLi route={"/search"}>Buscar</MenuLi>
        <LogoutBtn></LogoutBtn>
      </ul>
    </menu>
  );
}
