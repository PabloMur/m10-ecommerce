import SmallCard from "./cards/SmallCard";
export default function TopProducts() {
  return (
    <div className="h-96 bg-white text-black flex flex-col items-center justify-center">
      <h2 className="font-bold text-4xl mb-4 border-b-2 border-teal-800">
        Productos destacados
      </h2>
      <div className="flex">
        <SmallCard></SmallCard>
        <SmallCard></SmallCard>
        <SmallCard></SmallCard>
      </div>
    </div>
  );
}
