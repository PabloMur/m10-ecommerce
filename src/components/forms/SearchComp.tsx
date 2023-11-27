"use client";
import SeachBtn from "../ui/buttons/SearchBtn";
import Image from "next/image";
import lupa from "../../../public/lupa.svg";
import { useSearch } from "@/hooks";
import { useSearchProduct } from "@/hooks";
export default function SearchComp() {
  //hacer el hook para la busqueda y manejar todos los eventos que corresponden
  const searcher = useSearch();
  const search = useSearchProduct();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const target = e.target;
    const item = target.item.value;
    searcher(item); // Wrap item in parentheses to pass as an argument
    search(item);
  };
  return (
    <form
      className="bg-white w-1/2 h-10 rounded-full border border-gray shadow-2xl flex justify-between items-center"
      onSubmit={handleSubmit}
    >
      <div className="p-3">
        <Image
          src={lupa}
          width={20}
          height={20}
          alt="imagen de lupa de buscador"
        ></Image>
      </div>
      <input
        type="text"
        placeholder="Que estas buscando?"
        name="item"
        className="w-full h-full flex justify-center items-center text-center text-black focus:outline-none focus: bg-none"
      />
      <SeachBtn></SeachBtn>
    </form>
  );
}
