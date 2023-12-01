"use client";
import { searchResultsAtom } from "@/atoms";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

const Results = () => {
  let results = ["hola", "como"];
  const searchResults = useRecoilValue(searchResultsAtom);
  console.log(searchResults + " desde el componente resultados");

  return (
    <section>
      <h2>Resultados</h2>
      <div>somos los resultados de busqueda</div>
      <div>{results}</div>
    </section>
  );
};
export { Results };
