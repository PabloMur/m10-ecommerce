import Menu from "./Menu";
import SearchBar from "./SearchBar";
import Logo from "./ui/Logo";
import { BurgerButton } from "./ui/buttons/BurgerBtn";
export default function Navbar() {
  return (
    <div className=" flex flex-col sm:flex-row justify-between p-3 items-center h-auto min-h-[10vh] relative">
      <div className="flex justify-between items-center w-full">
        <Logo></Logo>
        <BurgerButton />
      </div>
      <div className="bg-black w-full flex justify-center items-center">
        <SearchBar></SearchBar>
      </div>
      <Menu></Menu>
    </div>
  );
}
