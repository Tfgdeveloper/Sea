import React, { useEffect, useState, lazy, Suspense } from "react";
import { useLocation } from "react-router";

// ✅ FIX 1: Popup is lazy loaded — its JS chunk (framer-motion, ContactForm, lucide)
// is NOT downloaded until 3 seconds after page load.
// Before: all of that code was parsed on every page load even when popup never showed.
const Popup = lazy(() => import("./Popup"));

const PopupManager = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // ✅ FIX 2: Track whether the popup chunk should even be mounted in the DOM.
  // Before: <Popup> was always rendered (even when closed), meaning framer-motion
  // and ContactForm were always evaluated on page load.
  const [shouldMount, setShouldMount] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsPopupOpen(false);

    // ✅ FIX 3: Use requestIdleCallback so the timer only starts when the browser
    // is idle — i.e. after first paint, images loaded, JS parsed.
    // Before: setTimeout started immediately on page load, competing with
    // LCP and TBT during the most critical rendering window.
    let timer;
    const schedulePopup = () => {
      timer = setTimeout(() => {
        setShouldMount(true);   // now download the Popup chunk
        setIsPopupOpen(true);
      }, 3000);
    };

    if ("requestIdleCallback" in window) {
      const idleId = requestIdleCallback(schedulePopup, { timeout: 2000 });
      return () => {
        cancelIdleCallback(idleId);
        clearTimeout(timer);
      };
    } else {
      // fallback for Safari
      schedulePopup();
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  // ✅ FIX 4: Don't render anything at all until popup is actually needed.
  // Suspense fallback is null — no spinner, popup just appears when ready.
  if (!shouldMount) return null;

  return (
    <Suspense fallback={null}>
      <Popup
        isOpen={isPopupOpen}
        closePopup={() => setIsPopupOpen(false)}
      />
    </Suspense>
  );
};

export default PopupManager;