import { Results } from "@/components/Results";
import Loader from "@/components/ui/Loader";
export default function SearchPage() {
  return (
    <div className="h-[90vh] bg-white text-black flex flex-col items-center justify-center relative">
      <Loader></Loader>
      <Results></Results>
    </div>
  );
}
