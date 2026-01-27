import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Сбрасывает скролл при переходе на новую страницу
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
