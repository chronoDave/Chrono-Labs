import React, { useEffect, useRef, useCallback } from 'react';

export default (fn: React.EffectCallback, delay = 1000) => {
  const interval = useRef<number>();

  const destroy = useCallback(() => {
    if (interval.current) clearInterval(interval.current);
  }, []);

  const create = useCallback(() => {
    destroy();
    /**
     * React uses vanilla `setInterval`, which returns a number.
     * Typescript, however, expects NodeJS' timeout, which
     * returns NodeJS.Timeout
     */
    interval.current = setInterval(fn, delay) as unknown as number;
  }, [destroy, delay, fn]);

  useEffect(() => {
    create();
    return destroy;
  }, [create, destroy]);

  return [create, destroy];
};
