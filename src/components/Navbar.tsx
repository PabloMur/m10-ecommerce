import SearchBar from "./SearchBar";
import Logo from "./ui/Logo";
import LoginBtn from "./ui/buttons/LoginBtn";
export default function Navbar() {
  return (
    <div className="flex justify-between p-3 px-10 items-center">
      <Logo></Logo>
      <SearchBar></SearchBar>
      <LoginBtn></LoginBtn>
    </div>
  );
}

//<Menu></Menu>
