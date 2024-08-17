import React, { useEffect, useState } from 'react';
import Popup from '@components/popup'

const PopupManager = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasClosedPopup = sessionStorage.getItem('hasClosedPopup');
    if (!hasClosedPopup) {
      setTimeout(() => {
        setIsOpen(true);
      }, 5000); // Delay before showing the popup
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasClosedPopup', 'true');
  };

  return <Popup isOpen={isOpen} onClose={handleClose} />;
};

export default PopupManager;
