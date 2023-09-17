import { useEffect, useState } from 'react';

export function useHydrated() {
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(true);
  }, []);

  return state;
}
