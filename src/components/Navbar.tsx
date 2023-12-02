import Menu from "./Menu";
import SearchBar from "./SearchBar";
import Logo from "./ui/Logo";
import LoginBtn from "./ui/buttons/LoginBtn";
export default function Navbar() {
  return (
    <div className="flex flex-col sm:flex-row justify-between p-3 px-10 items-center h-auto min-h-[10vh]">
      <Logo></Logo>
      <SearchBar></SearchBar>
      <Menu></Menu>
      <LoginBtn></LoginBtn>
    </div>
  );
}

//<Menu></Menu>
