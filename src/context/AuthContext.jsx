import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocaleStorage";

//Context de autentificare

const AuthContext = createContext(null); //valoarea implicita

//componenta care va furniza contextul pt componentele copil

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false); //info despre utilizator

  //useLocaleStorage pentru acces si manipulare date
  const { item: localStorageUser, set, remove } = useLocalStorage("user");

  const login = (userObject) => {
    set(userObject);
    setUser(userObject);
  };
  //logout sterge utilizatorul din localeStorage
  const logout = () => {
    remove();
    setUser(null);
  };
  useEffect(() => {
    if (localStorageUser) {
      setUser(localStorageUser);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

//custom Hook pentru acces la contextul de autentificare
export const useAuth = () => {
  return useContext(AuthContext);
};
