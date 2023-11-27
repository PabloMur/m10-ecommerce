"use client";
import BigCard from "@/components/cards/BigCard";
import { usePathname } from "next/navigation";
export default function ProductDetailPage() {
  console.log(usePathname());

  return (
    <div className="min-h-[90vh] flex flex-grow bg-yellow-50">
      <BigCard></BigCard>
    </div>
  );
}
