import { createContext, useEffect, useState } from "react";
import axios from "../axios";
import Swal from "sweetalert2";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const token = localStorage.getItem("accessToken") || null;
  const [config, setConfig] = useState(false);

  const login = async (data) => {
    await axios
      .post("/login", data, { withCredentials: true })
      .then((res) => {
        setCurrentUser(res.data);
        localStorage.setItem("accessToken", res.data.accessToken);
        setConfig({
          headers: { token: `Bearer ${res.data.accesstoken}` },
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "warning",
          title: "Please check the credentials",
        });
      });
  };

  useEffect(() => {
    if (currentUser != undefined) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{ currentUser, login, setCurrentUser, token, config, setConfig }}
    >
      {children}
    </AuthContext.Provider>
  );
};
