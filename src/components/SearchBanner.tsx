import css from "@/styles/banner.module.css";
import SearchComp from "./forms/SearchComp";
export default function SearchBanner() {
  return (
    <div
      className={`${css.banner} w-full bg-yellow-50 flex flex-col justify-center items-center`}
    >
      <h1 className="font-bold text-3xl my-2">El mejor E-Commerce</h1>
      <SearchComp></SearchComp>
    </div>
  );
}
