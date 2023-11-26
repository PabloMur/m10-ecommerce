import { useGoTo } from "@/hooks";
export default function LogoutBtn() {
  const goto = useGoTo();
  const route = "/";
  const handleClick = () => {
    goto(route);
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
