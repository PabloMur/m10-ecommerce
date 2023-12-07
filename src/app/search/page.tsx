import { Results } from "@/components/Results";
import Loader from "@/components/ui/Loader";
export default function SearchPage() {
  return (
    <div className="min-h-[90vh] text-black flex flex-col items-center justify-center relative bg-gray-300">
      <Loader></Loader>
      <Results></Results>
    </div>
  );
}
