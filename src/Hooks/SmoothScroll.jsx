import { useEffect } from "react";

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    // Waiting until Lenis is available from the global window
    const interval = setInterval(() => {
      if (window.Lenis) {
        clearInterval(interval);
  
        const lenis = new window.Lenis({
          lerp: 0.1,
          smooth: true,
        });

        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
      }
    }, 100); // check every 100ms

    return () => clearInterval(interval);
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
