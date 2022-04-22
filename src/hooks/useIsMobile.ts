import { useState, useEffect } from "react";
import { SMALL_SCREEN_WIDTH } from "../constants";
import { useWindowSize } from "./useWindowSize";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width && width <= SMALL_SCREEN_WIDTH) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width, setIsMobile]);

  return isMobile;
};
