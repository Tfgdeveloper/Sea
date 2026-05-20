import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Popup from "./Popup";

const PopupManager = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsPopupOpen(false);

    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [location.pathname]); // runs on every page change

  return (
    <Popup
      isOpen={isPopupOpen}
      closePopup={() => setIsPopupOpen(false)}
    />
  );
};

export default PopupManager;