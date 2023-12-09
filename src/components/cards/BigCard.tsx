import Image from "next/image";
import { OrderBtn } from "../ui/buttons/OrderBtn";

type BigCardType = {
  title: string;
  imageUrl: string;
  price?: number;
  brand?: string;
  category?: string;
  description?: string;
};

export default function BigCard(props: BigCardType) {
  const { title, imageUrl, price, brand, category, description } = props;

  return (
    <div className="border border-gray-300 rounded overflow-hidden shadow-md mx-auto  my-8 w-[90%] sm:w-2/3 flex flex-col sm:flex-row justify-center items-center">
      <div className="h-64 md:h-80 overflow-hidden sm:w-1/2 w-full flex justify-center items-center">
        <Image src={imageUrl} alt={title} width={220} height={100} />
      </div>
      <div className="flex flex-col w-full sm:w-1/2 bg-teal-50">
        <div className="p-4 h-3/4 flex flex-col justify-center items-start">
          <h2 className="text-xl font-semibold mb-2 text-teal-800">{title}</h2>
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-bold">{brand}</span> |{" "}
            <span className="italic">{category}</span>
          </p>
          <p className="text-sm text-gray-700 mb-2 overflow-y-scroll">
            {description}
          </p>
          <p className="text-lg font-bold text-teal-800">${price}</p>
        </div>
        <div className="flex items-center justify-center  h-1/4 p-4">
          <OrderBtn text={"Comprar ahora"}></OrderBtn>
        </div>
      </div>
    </div>
  );
}
