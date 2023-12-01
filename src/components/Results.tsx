"use client";
import { searchResultsAtom } from "@/atoms";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import SmallCard from "./cards/SmallCard";

const Results = () => {
  const searchResults = useRecoilValue(searchResultsAtom);

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="flex">
        {searchResults.map((r: any) => {
          return (
            <SmallCard
              key={r.objectID}
              title={r.Name}
              id={r.objectID}
              price={r.Price}
              image={r.Images}
            ></SmallCard>
          );
        })}
      </div>
    </section>
  );
};
export { Results };
