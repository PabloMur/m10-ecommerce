import Menu from "./Menu";
import SearchBar from "./SearchBar";
import Logo from "./ui/Logo";
import { BurgerButton } from "./ui/buttons/BurgerBtn";
export default function Navbar() {
  return (
    <div className=" flex sm:flex-row justify-between p-3 px-10 items-center h-auto min-h-[10vh] relative">
      <Logo></Logo>
      <SearchBar></SearchBar>
      <Menu></Menu>
      <BurgerButton />
    </div>
  );
}
