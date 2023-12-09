import Image from "next/image";
import { useGoTo } from "@/hooks";
import { useSetRecoilState } from "recoil";
import { menuActiveAtom } from "@/atoms";

export default function Logo() {
  const goto = useGoTo();
  const menuSetter = useSetRecoilState(menuActiveAtom);
  return (
    <div
      className="hover:cursor-pointer my-3"
      onClick={() => {
        menuSetter(false);
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
