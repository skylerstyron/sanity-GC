import React from 'react';
import { AnimatePresence, motion as m } from 'framer-motion';
import Newsletter from '@components/newsletter';


const popupAnim = {
  show: {
    y: '0%',
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  hide: {
    y: '100%',
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.6, 1],
    },
  },
};

const Popup = ({ isOpen, onClose, data = {} }) => {
  const { blocks } = data
  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          className="popup"
          initial="hide"
          animate="show"
          exit="hide"
          variants={popupAnim}
          role="dialog"
          aria-live="polite"
        >
          <div className="popup--content">
            <div className="popup--message">
              <h3>Join the Cult</h3>
              <p>Become a member. Reap the rewards.</p>

              {blocks.map((block) => {


                <Newsletter data={block.newsletter} />


              })}

            </div>
            <button className="popup--close" onClick={onClose}>
              &times;
            </button>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
