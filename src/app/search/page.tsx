import { Results } from "@/components/Results";
import Loader from "@/components/ui/Loader";
export default function SearchPage() {
  return (
    <div className="min-h-[90vh] bg-gray-100 text-black flex flex-col items-center justify-center relative">
      <Loader></Loader>
      <Results></Results>
    </div>
  );
}
