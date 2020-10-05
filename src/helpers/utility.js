import { LIGHT } from "../constants/constants";

export const getTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme ?? LIGHT;
};

export const isMobile = "ontouchstart" in window || navigator.msMaxTouchPoints;
