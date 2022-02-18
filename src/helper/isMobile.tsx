import React, { useEffect, useState } from "react";

const isMobile = (): Boolean => {
  const [width, setWidth] = useState(window.innerWidth);
  const [mobile, setMobile] = useState(false);
  const breakpoint = 767;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    setMobile(width < breakpoint);
  }, []);
  return mobile;
};

export { isMobile };
