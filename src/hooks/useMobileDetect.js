import { useEffect, useState } from "react";

export function useMobileDetect() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const isMobileDevice =
      "ontouchstart" in window || navigator.msMaxTouchPoints;
    setIsMobile(isMobileDevice);
  }, []);

  return isMobile;
}
