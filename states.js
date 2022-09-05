// Recoil state managment
import { atom } from "recoil";
// Universally unique IDentifier module for preventing duplicated atom key whilte next.js building
import { v1 } from "uuid";

//  Notification for first visit
const homeIntroState = atom({
  key: `homeIntroState/${v1()}`,
  default: true,
});

const videoIdState = atom({
  key: `videoIdState/${v1()}`,
  default: "default",
});

export { homeIntroState, videoIdState };
