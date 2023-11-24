import { useGoTo } from "@/hooks";
export default function LoginBtn() {
  const goto = useGoTo();
  const route = "/login";
  const handleClick = () => {
    goto(route);
  };
  return (
    <button onClick={handleClick} className="p-2 bg-blue-400 rounded-lg">
      Iniciar Sesion
    </button>
  );
}
