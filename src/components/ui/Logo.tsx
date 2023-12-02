import Image from "next/image";
import { useGoTo } from "@/hooks";

export default function Logo() {
  const goto = useGoTo();
  return (
    <div
      className="hover:cursor-pointer my-3"
      onClick={() => {
        goto("/");
      }}
    >
      <Image
        src="/logo.png"
        width={150}
        height={75}
        alt="Picture of the author"
      />
    </div>
  );
}
