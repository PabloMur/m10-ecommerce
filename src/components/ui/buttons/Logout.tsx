import { userLoggedAtom } from "@/atoms";
import { useLogoutUser } from "@/hooks";
import { useRecoilValue } from "recoil";
export default function LogoutBtn() {
  const logout = useLogoutUser();
  const userLogged = useRecoilValue(userLoggedAtom);
  const handleClick = () => {
    logout();
  };
  return (
    userLogged && (
      <button
        onClick={handleClick}
        className="bg-red-800 rounded-lg font-bold px-3 py-2"
      >
        Cerrar Sesion
      </button>
    )
  );
}
