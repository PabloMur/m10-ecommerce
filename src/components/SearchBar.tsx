import { usePathname } from "next/navigation";
import SearchComp from "./forms/SearchComp";
export default function SearchBar() {
  const showSearchBar = usePathname() == "/search" ? true : false;
  return showSearchBar && <SearchComp />;
}
