import {
  getTokenAtom,
  loaderAtom,
  loginFormAtom,
  userEmailAtom,
  userLoggedAtom,
  userTokenAtom,
} from "@/atoms";
import { APIgetToken, APIsendCode } from "@/tools/apiCalls";
import { useRouter } from "next/navigation";
import { useRecoilValue, useSetRecoilState } from "recoil";

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
  return async (email: string) => {
    emailSetter(email);
    loaderSetter(true);
    await APIsendCode(email);
    loginFormSetter(false);
    getTokenSetter(true);
    loaderSetter(false);
  };
}

export function useGetToken() {
  const loaderSetter = useSetRecoilState(loaderAtom);
  const getTokenSetter = useSetRecoilState(getTokenAtom);
  const loginFormSetter = useSetRecoilState(loginFormAtom);
  const userEmail = useRecoilValue(userEmailAtom);
  const userTokenSetter = useSetRecoilState(userTokenAtom);
  const loggedSetter = useSetRecoilState(userLoggedAtom);
  const goto = useGoTo();

  return async (code: number) => {
    loaderSetter(true);
    const res = await APIgetToken(userEmail, code);
    loginFormSetter(true);
    getTokenSetter(false);
    if (res.response.token) {
      loaderSetter(false);
      userTokenSetter({ token: res.response.token });
      loggedSetter(true);
      goto("/");
    }
  };
}
