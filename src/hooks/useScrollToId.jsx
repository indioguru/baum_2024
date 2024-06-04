import { useCallback } from 'react';

const useScrollToId = () => {
  const scrollToId = useCallback((id) => {
    const targetElement = document.getElementById(id);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return scrollToId;
};

export default useScrollToId;
