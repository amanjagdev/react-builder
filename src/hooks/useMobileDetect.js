import { useEffect, useState } from "react";
import { useWindowSize } from "./useWindowSize";

export function useMobileDetect() {
  const windowSize = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const isMobileDevice =
      "ontouchstart" in window || navigator.msMaxTouchPoints;
    setIsMobile(isMobileDevice);
  }, [windowSize.width]);

  return isMobile;
}
