import React, { createContext, useRef } from "react";

export const ScrollMenuContext = createContext();

export const ScrollMenuProvider = ({ children }) => {
  
    // Smooth scrolling function
    const smoothScrollInContainer = (container, targetEl, duration = 1000) => {
      if (!container || !targetEl) return;
  
      const startY = container.scrollTop;
      const targetY = targetEl.offsetTop - 250; // adjust offset if needed
      const diff = targetY - startY;
      let startTime = null;
  
      const easeInOutQuad = (t) =>
        t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const timeElapsed = timestamp - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        container.scrollTop = startY + diff * easeInOutQuad(progress);
  
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
  
      requestAnimationFrame(step);
    };
  
    return (
      <ScrollMenuContext.Provider value={{ smoothScrollInContainer }}>
        {children}
      </ScrollMenuContext.Provider>
    );
  };