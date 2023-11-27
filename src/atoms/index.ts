import { atom } from "recoil";

export const sentCodeAtom = atom({
  key: "sentCodeAtom",
  default: false,
});

export const loaderAtom = atom({
  key: "loaderAtom",
  default: false,
});

export const getTokenAtom = atom({
  key: "getTokenAtom",
  default: false,
});

export const loginFormAtom = atom({
  key: "loginFormAtom",
  default: true,
});

export const userEmailAtom = atom({
  key: "userEmailAtom",
  default: "example@email.com",
});

export const userTokenAtom = atom({
  key: "userTokenAtom",
  default: { token: "" },
});

export const userLoggedAtom = atom({
  key: "userLogged",
  default: false,
});
