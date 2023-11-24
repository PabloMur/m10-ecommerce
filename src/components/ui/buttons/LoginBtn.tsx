import { useGoTo } from "@/hooks";
export default function LoginBtn() {
  const goto = useGoTo();
  const route = "/login";
  const handleClick = () => {
    goto(route);
  };
  return (
    <button
      onClick={handleClick}
      className="bg-blue-400 rounded-lg font-bold px-3 py-2"
    >
      Iniciar Sesion
    </button>
  );
}