import { useCreateOrder } from "@/hooks";
const OrderBtn = ({ text }: any) => {
  const orderCreator = useCreateOrder();
  return (
    <button
      className="bg-teal-800 rounded-lg font-bold px-3 py-2"
      onClick={() => {
        orderCreator();
      }}
    >
      {text}
    </button>
  );
};
export { OrderBtn };
