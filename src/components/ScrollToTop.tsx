import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls window to top on route change.
 * Ensures smooth, cross-browser behavior and avoids layout shifts.
 * Place <ScrollToTop /> inside your Router, above Routes.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use requestAnimationFrame for best UX, avoids layout shift
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
  }, [pathname]);

  return null;
}
