import { useGoTo } from "@/hooks";
import { useRecoilValue } from "recoil";
import { userLoggedAtom } from "@/atoms";
export default function LoginBtn() {
  const goto = useGoTo();
  const active = useRecoilValue(userLoggedAtom);
  const route = "/login";
  const handleClick = () => {
    goto(route);
  };
  return (
    !active && (
      <button
        onClick={handleClick}
        className="bg-teal-800 rounded-lg font-bold px-3 py-2"
      >
        Iniciar Sesion
      </button>
    )
  );
}
