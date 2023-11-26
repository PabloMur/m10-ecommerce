import css from "@/styles/banner.module.css";
import SearchComp from "./forms/SearchComp";
export default function SearchBanner() {
  return (
    <div
      className={`${css.banner} w-full bg-yellow-50 flex flex-col justify-center items-center`}
    >
      <h1 className="font-bold text-2xl my-5 w-1/2 text-center">
        Tu tienda para encontrar relojes elegantes.
        <br /> Descubre y elige tu pieza perfecta hoy.
      </h1>
      <SearchComp></SearchComp>
    </div>
  );
}
