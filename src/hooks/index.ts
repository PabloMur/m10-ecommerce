import {
  getTokenAtom,
  loaderAtom,
  loginFormAtom,
  menuActiveAtom,
  productDataAtom,
  searchResultsAtom,
  searchedItemAtom,
  userEmailAtom,
  userLoggedAtom,
  userTokenAtom,
} from "@/atoms";
import {
  APIgetToken,
  APIsendCode,
  APISearch,
  APIGetMe,
  APIGetProductData,
  APICreateOrder,
} from "@/tools/apiCalls";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";

export function useGoTo() {
  const router = useRouter();
  return (route: string) => {
    router.push(route);
  };
}

export function useSearch() {
  const itemSetter = useSetRecoilState(searchedItemAtom);
  const loaderSetter = useSetRecoilState(loaderAtom);
  const resultsSetter = useSetRecoilState(searchResultsAtom);
  const item = useRecoilValue(searchedItemAtom);
  const goto = useGoTo();
  const path = usePathname();

  const searcher = async (item: string) => {
    itemSetter(item);
    console.log(item);
    loaderSetter(true);
    const res = await APISearch({ limit: 10, offset: 0, q: item });
    loaderSetter(false);
    console.log(res);
    console.log(res.results + "somos los resultados");
    resultsSetter(res.results);

    if (path !== "/search") goto("/search");
    return res;
  };
  return { searcher, item };
}

export function useRenderProductsResutls() {
  return "hola";
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

export function useLogoutUser() {
  const userTokenSetter = useSetRecoilState(userTokenAtom);
  const emailSetter = useSetRecoilState(userEmailAtom);
  const loginFormSetter = useSetRecoilState(loginFormAtom);
  const userLoggedSetter = useSetRecoilState(userLoggedAtom);
  const menuSetter = useSetRecoilState(menuActiveAtom);
  const goto = useGoTo();
  return async () => {
    emailSetter("");
    loginFormSetter(true);
    userTokenSetter({ token: "" });
    userLoggedSetter(false);
    menuSetter(false);
    goto("/");
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

export function useGetUserData() {
  const userToken = useRecoilValue(userTokenAtom);
  const loaderSetter = useSetRecoilState(loaderAtom);
  const protection = useProtectedPage();

  return async () => {
    protection();
    loaderSetter(true);
    const res = await APIGetMe(userToken.token);
    loaderSetter(false);
    return res;
  };
}

export function useGetProductData() {
  const { id } = useParams();
  const loaderSetter = useSetRecoilState(loaderAtom);
  const prodDataSetter = useSetRecoilState(productDataAtom);

  useEffect(() => {
    const fetchData = async () => {
      loaderSetter(true);
      const res = await APIGetProductData(id);
      prodDataSetter(res.response);
      console.log("se encontro algo");
      loaderSetter(false);
    };

    fetchData(); // Execute the async function immediately

    // Return an empty function to prevent the useEffect hook from re-executing
    return () => {};
  }, []);
}

export function useCreateOrder() {
  const { id } = useParams();
  const currentProductData = useRecoilValue(productDataAtom);
  const loaderSetter = useSetRecoilState(loaderAtom);
  const userDataGetter = useGetUserData();
  const userToken = useRecoilValue(userTokenAtom);
  const userLogged = useRecoilValue(userLoggedAtom);

  return async () => {
    loaderSetter(true);
    const userID = await userDataGetter();

    const orderData = {
      orderData: {
        userID: userID.userData.user.id,
        Items: [
          {
            id,
            title: currentProductData.Name,
            quantity: 1,
            unit_price: currentProductData.Price,
          },
        ],
      },
    };
    const order = await APICreateOrder(userToken.token, userID, id, orderData);
    //la siguiente url es la que nos lleva a mercadopago para poder empezar con el proceso de pago
    const redirectURL = order.response.preferenceResponse.init_point;
    // if (redirectURL) {
    //   window.open(order.response.preferenceResponse.init_point);
    //   loaderSetter(false);
    // }
    if (redirectURL) {
      //Reescribe la URL en la misma pestaña
      window.location.href = redirectURL;
      loaderSetter(false);
    }
    return;
  };
}

export function useProtectedPage() {
  const userLogged = useRecoilValue(userLoggedAtom);
  const goto = useGoTo();
  return () => {
    if (!userLogged) {
      goto("/");
    }
    return;
  };
}
