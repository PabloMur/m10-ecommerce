import Logo from "./ui/Logo";
import LoginBtn from "./ui/buttons/LoginBtn";
export default function Navbar() {
  return (
    <div className="flex justify-between p-3 items-center">
      <Logo></Logo>
      <LoginBtn></LoginBtn>
    </div>
  );
}
