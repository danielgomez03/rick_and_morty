import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards";
import Nav from "./components/Nav";
import About from "./components/About";
import Detail from "./components/Detail";
import NotFound from "./components/NotFound";
import Form from "./components/Form";
import Favorites from "./components/Favorites";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [access, setAccess] = React.useState(false);
  // const EMAIL = "Danigomez.serme@gmail.com";
  // const PASSWORD =  "@Qwerty1";

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const QUERY=  `?email=${email}&password=${password}`
      const { data } = await axios(URL + QUERY)
        const { access } = data;
        setAccess(data);
        access && navigate('/home');
    
    } 
    catch (error) {
        return { error: error.message};
    }
  
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const logout = () => {
    setAccess(false);
    navigate("/");
  };

  const [characters, setCharacters] = React.useState([]);

  async function onSearch(id) {
    try {
      const url = "http://localhost:3001/rickandmorty/character/" + id;

      const { data } = await axios(url);
      const char = characters?.find((e) => e.id === Number(data.id));

      if (char) {
        alert("Already in the list");
      } else if (data.id !== undefined) {
        setCharacters((characters) => [...characters, data]);
      } else {
        alert("Character not found");
      }
    } catch (error) {
      return { error: error.message };
    }
  }

  const onClose = (id) => {
    setCharacters((oldChars) => {
      return oldChars.filter((ch) => ch.id !== id);
    });
  };

  return (
    <div className="container">
      {location.pathname === "/" ? null : (
        <Nav logout={logout} onSearch={onSearch} />
      )}

      <Routes>
        <Route path="/" element={<Form login={login} />}></Route>

        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters}></Cards>}
        >
          {" "}
        </Route>

        <Route path="/about" element={<About />}>
          {" "}
        </Route>

        <Route path="/detail/:id" element={<Detail />}>
          {" "}
        </Route>

        <Route path="/favorites" element={<Favorites/>}>
          {" "}
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
