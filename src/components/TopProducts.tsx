import SmallCard from "./cards/SmallCard";
import imageTest from "../../public/banner.jpg";
import otraImage from "../../public/bannerDos.jpg";
export default function TopProducts() {
  return (
    <div className="min-h-96 bg-white text-black flex flex-col items-center justify-center py-10">
      <h2 className="font-bold text-4xl mb-4 border-b-2 border-teal-800">
        Productos destacados
      </h2>
      <div className="flex flex-col sm:flex-row">
        <SmallCard
          title="Reloj Uno"
          id="1"
          price="350"
          image={imageTest}
        ></SmallCard>
        <SmallCard
          title="Reloj Dos"
          id="2"
          price="350"
          image={otraImage}
        ></SmallCard>
      </div>
    </div>
  );
}
