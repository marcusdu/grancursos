import { useState, useCallback } from "react";

function useLocalStorage(key) {
  const [value, setValue] = useState(window.localStorage.getItem(key));

  const setLocalStorage = useCallback((valueToStorage) => {
    if (valueToStorage === null) {
      return window.localStorage.removeItem(key);
    }

    window.localStorage.setItem(key, JSON.stringify(valueToStorage));
    return setValue(valueToStorage);
  }, [key]);

  return [value, setLocalStorage];
}

export default useLocalStorage;
