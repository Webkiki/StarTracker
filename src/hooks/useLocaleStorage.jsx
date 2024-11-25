// defirine hook care primește un argument 'key'.

export const useLocalStorage = (key) => {
  // 1. Citim valoarea stocată în localStorage sub cheia specificată 'key'.
  // Utilizăm localStorage.getItem(key) pentru a obține valoarea stocată.
  // Deoarece localStorage salvează doar șiruri de caractere (strings), folosim JSON.parse pentru a
  // deserializa valoarea și a o transforma într-un obiect JavaScript.
  // Dacă nu există nicio valoare salvată pentru această cheie, `getItem` va returna null.
  const item = JSON.parse(localStorage.getItem(key));

  const set = (value) => {
    localStorage.setItem(key, JSON.stringify(value)); // Salvează valoarea în localStorage
  };

  const remove = () => {
    localStorage.removeItem(key); // Șterge elementul din localStorage
  };

  // 4. Returnăm un obiect care conține:
  // - `item`: valoarea citită din localStorage (sau null dacă nu există).
  // - `set`: funcția care permite salvarea unei noi valori în localStorage.
  // - `remove`: funcția care permite ștergerea datelor din localStorage.
  return { item, set, remove };
};
