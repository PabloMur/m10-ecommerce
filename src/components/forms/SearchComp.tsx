"use client";
import SeachBtn from "../ui/buttons/SearchBtn";
import { useSearch } from "@/hooks";
import { useRecoilValue } from "recoil";
import { searchedItemAtom } from "@/atoms";
import { SearchCompInput } from "../ui/inputs/SearchCompImput";
import { Lupa } from "@/components/ui/icons/Lupa";

export default function SearchComp() {
  const { searcher, item } = useSearch();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const target = e.target;
    const itemForm = target.item.value;
    searcher(itemForm);
  };
  return (
    <form
      className="bg-white  my-4 sm:my-0 w-full sm:w-1/2 h-10 rounded-full border border-gray shadow-2xl flex justify-between items-center"
      onSubmit={handleSubmit}
    >
      <Lupa></Lupa>
      <SearchCompInput item={item}></SearchCompInput>
      <SeachBtn></SeachBtn>
    </form>
  );
}
