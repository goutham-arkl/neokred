import { useContext } from "react";
import "./App.css";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/authContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={currentUser ? <Profile /> : <Login />} />
          <Route
            path="/login"
            element={currentUser ? <Profile /> : <Login />}
          />
          <Route
            path="/register"
            element={currentUser ? <Profile /> : <Register />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
