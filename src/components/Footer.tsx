import SocialNets from "@/components/SocialNets";
import MenuLi from "./ui/buttons/MenuLi";
export default function Footer() {
  return (
    <footer className="bg-black h-80 flex flex-col items-center justify-between">
      <div className="flex justify-between w-full p-10">
        <div className="h-60 flex justify-center items-center">
          <ul className="flex flex-col gap-2 items-start justify-center">
            <MenuLi route={"/profile"}>Mi Perfil</MenuLi>
            <MenuLi route={"/search"}>Buscar</MenuLi>
          </ul>
        </div>
        <SocialNets />
      </div>
      <p className="mb-4 p-5">©2023 compralo</p>
    </footer>
  );
}
