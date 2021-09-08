import { useState, useEffect, useCallback } from 'react';

const useFind = (list, field, value) => {
  const [found, setFound] = useState();

  const getFound = useCallback(() => {
    const foundItem = list.find((item) => item[field].toLowerCase() === value);
    if (foundItem) setFound(foundItem);
  }, [list, field, value]);

  useEffect(getFound, [getFound]);

  return { found };
};

export default useFind;
