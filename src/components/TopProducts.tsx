import SmallCard from "./cards/SmallCard";
export default function TopProducts() {
  return (
    <div className="min-h-96 bg-white text-black flex flex-col items-center justify-center py-10">
      <h2 className="font-bold text-4xl mb-4 border-b-2 border-teal-800">
        Productos destacados
      </h2>
      <div className="flex">
        <SmallCard title="Reloj Uno" id="1" price="350"></SmallCard>
        <SmallCard title="Reloj Dos" id="2" price="350"></SmallCard>
        <SmallCard title="Reloj Tres" id="3" price="350"></SmallCard>
        <SmallCard title="Reloj Cuatro" id="4" price="350"></SmallCard>
      </div>
    </div>
  );
}
