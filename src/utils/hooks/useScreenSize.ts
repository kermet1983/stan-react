import { useEffect, useState } from 'react';
import { Sizes, size } from '../breakpoints';

const useScreenSize = () => {
  const [screenSize, setScreeSize] = useState<keyof typeof Sizes>(Sizes.sm);

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      setScreeSize(getWidthCategory(currentWidth));
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};

const getWidthCategory = (width: number) => {
  if (width < size.sm) {
    return 'xs';
  } else if (width < size.md) {
    return 'sm';
  } else if (width < size.lg) {
    return 'md';
  } else if (width < size.xl) {
    return 'lg';
  } else if (width < size.xxl) {
    return 'xl';
  } else {
    return 'xxl';
  }
};

export default useScreenSize;
