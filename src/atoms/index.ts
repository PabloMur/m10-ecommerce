import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

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
  effects_UNSTABLE: [persistAtom],
});

export const userTokenAtom = atom({
  key: "userTokenAtom",
  default: { token: "" },
  effects_UNSTABLE: [persistAtom],
});

export const userLoggedAtom = atom({
  key: "userLogged",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
