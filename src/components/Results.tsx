"use client";
import { searchResultsAtom } from "@/atoms";
import { useRecoilValue } from "recoil";
import SmallCard from "./cards/SmallCard";

const Results = () => {
  const searchResults = useRecoilValue(searchResultsAtom);

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="flex flex-wrap justify-center items-center">
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
