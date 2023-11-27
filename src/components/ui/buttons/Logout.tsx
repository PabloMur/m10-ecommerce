import { useLogoutUser } from "@/hooks";
export default function LogoutBtn() {
  const logout = useLogoutUser();
  const handleClick = () => {
    logout();
  };
  return (
    <button
      onClick={handleClick}
      className="bg-red-800 rounded-lg font-bold px-3 py-2"
    >
      Cerrar Sesion
    </button>
  );
}
