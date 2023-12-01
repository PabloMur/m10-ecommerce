import Image from "next/image";
import lupa from "../../../../public/lupa.svg";
const Lupa = () => {
  return (
    <div className="p-3">
      <Image
        src={lupa}
        width={20}
        height={20}
        alt="imagen de lupa de buscador"
      ></Image>
    </div>
  );
};
export { Lupa };
