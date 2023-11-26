import { usePathname } from "next/navigation";
export default function SearchBar() {
  const showSearchBar = usePathname() == "/search" ? true : false;
  return showSearchBar && <div>Soy la barra de busqueda</div>;
}
