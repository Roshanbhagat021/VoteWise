import { createContext, useState, useEffect } from "react";

// Create context
export const AuthContext = createContext();

// Context provider
export function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const savedToken = localStorage.getItem("authToken");
    const savedName = localStorage.getItem("userName");

    if (savedToken && savedName) {
      setToken(savedToken);
      setUserName(savedName);
      setIsAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, token, setToken, userName, setUserName }}>
      {children}
    </AuthContext.Provider>
  );
}
