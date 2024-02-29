import { useState, useEffect } from "react";

function useScreenResolution() {
  const isSSR = typeof window === "undefined";

  const [resolution, setResolution] = useState({
    width: isSSR ? 0 : window.innerWidth,
  });

  useEffect(() => {
    if (isSSR) return;

    const handleResize = () => {
      setResolution({ width: window.innerWidth });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return resolution;
}

export default useScreenResolution;
