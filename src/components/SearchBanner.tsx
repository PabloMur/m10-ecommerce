import css from "@/styles/banner.module.css";
import SearchComp from "./forms/SearchComp";
import Loader from "./ui/Loader";
export default function SearchBanner() {
  return (
    <div
      className={`${css.banner} w-full bg-yellow-50 flex flex-col justify-center items-center relative`}
    >
      <Loader></Loader>
      <h1 className="font-bold text-2xl my-5 sm:my-0 text-center w-full sm:w-1/2 p-3 h-1/3 sm:h-full flex justify-center items-center sm:items-end">
        Tu tienda para encontrar relojes elegantes.
        <br /> Descubre y elige tu pieza perfecta hoy.
      </h1>
      <div className=" h-2/3 w-full p-3 pt-6 flex justify-center">
        <SearchComp></SearchComp>
      </div>
    </div>
  );
}
