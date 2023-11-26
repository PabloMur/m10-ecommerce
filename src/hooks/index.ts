import {
  getTokenAtom,
  loaderAtom,
  loginFormAtom,
  userEmailAtom,
} from "@/atoms";
import { useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";

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

export function useLogUser() {
  const emailSetter = useSetRecoilState(userEmailAtom);
  const loaderSetter = useSetRecoilState(loaderAtom);
  const getTokenSetter = useSetRecoilState(getTokenAtom);
  const loginFormSetter = useSetRecoilState(loginFormAtom);
  return (email: string) => {
    emailSetter(email);
    loaderSetter(true);
    setTimeout(() => {
      loginFormSetter(false);
      getTokenSetter(true);
      loaderSetter(false);
    }, 2000);
  };
}

export function useGetToken() {
  const loaderSetter = useSetRecoilState(loaderAtom);

  return (code: string) => {
    loaderSetter(true);
    setTimeout(() => {
      alert(code);
      loaderSetter(false);
    }, 2000);
  };
}
