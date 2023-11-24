import { useRouter } from "next/navigation";

export function useGoTo() {
  const router = useRouter();
  return (route: string) => {
    router.push(route);
  };
}

export function useSearch() {
  const searchItem = (item: string) => {
    alert("estamos buscando " + item);
  };
  return searchItem;
}
