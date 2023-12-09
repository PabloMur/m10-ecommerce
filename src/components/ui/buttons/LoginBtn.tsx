import { useGoTo } from "@/hooks";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { menuActiveAtom, userLoggedAtom } from "@/atoms";
export default function LoginBtn() {
  const goto = useGoTo();
  const active = useRecoilValue(userLoggedAtom);
  const menuSetter = useSetRecoilState(menuActiveAtom);
  const route = "/login";
  const handleClick = () => {
    menuSetter(false);
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
