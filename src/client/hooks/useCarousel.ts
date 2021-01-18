import { useState, useCallback } from 'react';

// Hooks
import useInterval from './useInterval';

export default (size: number, delay = 10000) => {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex(prevIndex => {
      const newIndex = prevIndex + 1;
      return newIndex > size - 1 ?
        0 :
        newIndex;
    });
  }, [size]);

  const previous = useCallback(() => {
    setIndex(prevIndex => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ?
        size - 1 :
        newIndex;
    });
  }, [size]);

  const [create] = useInterval(next, delay);

  return ({
    index,
    setIndex,
    handlePrevious: () => {
      create();
      previous();
    },
    handleNext: () => {
      create();
      next();
    },
    handleClick: (newIndex: number) => {
      create();
      setIndex(newIndex);
    }
  });
};
