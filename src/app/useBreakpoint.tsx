import { useState, useEffect } from 'react';

const useBreakpoint = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 576);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth < 576);
      setIsDesktop(window.innerWidth >= 576);
    };

    window.addEventListener('resize', updateScreenSize);
    updateScreenSize();

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return { isMobile, isDesktop };
};

export default useBreakpoint;