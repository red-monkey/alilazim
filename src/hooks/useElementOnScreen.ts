"use client";
import { useEffect, useRef, useState } from "react";

export const useElementOnScreen = () => {
  const itemRef = useRef<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Disconnect the observer only for this specific element
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      // Cleanup: Disconnect the observer when the component unmounts
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []); // No dependencies, each instance manages its own observer

  return [itemRef, isVisible];
};
