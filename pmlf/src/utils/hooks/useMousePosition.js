import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [mousePos, setMousePos] = useState({ x: null, y: null });

  const updateMousePos = ev => {
    setMousePos({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePos);

    return () => window.removeEventListener("mousemove", updateMousePos);
  }, []);

  return mousePos;
};

export default useMousePosition;