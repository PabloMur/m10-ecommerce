"use client";
import { productDataAtom } from "@/atoms";
import BigCard from "@/components/cards/BigCard";
import Loader from "@/components/ui/Loader";
import { useGetProductData } from "@/hooks";
import { useRecoilValue } from "recoil"; // Agrega useSetRecoilState

export default function ProductDetailPage() {
  useGetProductData();
  const productData = useRecoilValue(productDataAtom);

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-white relative">
      <Loader></Loader>
      <BigCard
        title={productData.Name}
        imageUrl={productData.Images}
        price={productData.Price}
        brand={productData.Brand}
        category={productData.Category}
        description={productData.Description}
      />
    </div>
  );
}
