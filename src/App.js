import "./App.css";
import Login from "./Components/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import Team from "./Components/Team";
import Data from "./Components/Apidata/Data";
import Teamdata from "./Components/Apidata/Teamdata";
import Registration from "./Components/Registration";
import Navbar from "./Components/Navbar";
import Player from "./Components/Player";
import Addteam from "./Components/Addteam";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function App() {
  const [IsLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  let tokenedata = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    setIsLogin(tokenedata);
  }, [IsLogin,tokenedata]);
  return (
    <>
      <Routes>
        {!IsLogin && (
          <>
            <Route path="/" Component={Login}></Route>
            <Route path="/registrtion" Component={Registration}></Route>
          </>
        )}
        {IsLogin && (
          <>
            <Route path="/team" Component={Team} />
            <Route path="/player" Component={Player} />
            <Route path="/navbar" Component={Navbar} />
            <Route path="/addteam" Component={Addteam} />
          </>
        )}

        <Route
          path="*"
          element={<Navigate to={IsLogin ? "/team" : "/"} />}
        />
      </Routes>
    </>
  );
}

export default App;
