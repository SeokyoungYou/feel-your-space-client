import { atom } from "recoil";

const homeIntroState = atom({
  key: "homeIntroState",
  default: true,
});

export { homeIntroState };
