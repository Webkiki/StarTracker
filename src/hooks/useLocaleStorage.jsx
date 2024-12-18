export const useLocalStorage = (key) => {
  const item = JSON.parse(localStorage.getItem(key));

  const set = (value) => {
    localStorage.setItem(key, JSON.stringify(value)); // Salvează valoarea în localStorage
  };

  const remove = () => {
    localStorage.removeItem(key); // Șterge elementul din localStorage
  };

  return { item, set, remove };
};
