// useLenis.js
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,                // Slightly slower scroll for a calmer feel
      smooth: true,                 // Enable smooth scroll
      easing: (t) => 1 - Math.pow(1 - t, 3), // Ease-out cubic for gentle finish
      gestureDirection: 'vertical', // Default vertical scroll
      smoothTouch: true,            // Smooth scroll on touch devices too
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}
