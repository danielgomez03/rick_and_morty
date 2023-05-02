import React, { useState, useEffect  } from 'react';
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail.jsx';
import NotFound from './components/NotFound/NotFound';
import Form from './components/Form';
import Favorites from './components/Favorites/Favorites';




function App() {

   const navigate = useNavigate();
   const location = useLocation()
   const [access, setAccess] = useState(false);

   const EMAIL = "Danigomez.serme@gmail.com";
   const PASSWORD =  "@Qwerty1";

   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   };

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const logout = () => {
      setAccess(false);
      navigate("/");
   };

   
   const [characters, setCharacters] = React.useState([]);
   
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            let exist =  characters.find((ch)=>ch.id === data.id);
            if(exist) {
               alert("Already exist");
            } else{
               setCharacters((oldChars) => [...oldChars, data]);
            }

         }});
   };

   const onClose = (id) => {
      setCharacters((oldChars)=>{
         return oldChars.filter((ch)=> ch.id !== id)
      });
   };


   return (
      <div className='App'>

         {location.pathname === "/" ? null: <Nav logout={logout}/> }
         
         <Routes>
            <Route path="/" element={<Form login={login}/>}></Route>

            <Route path="/home" element={<Cards onClose={onClose} onSearch={onSearch} characters={characters}></Cards>}> </Route> 

            <Route path="/about" element={<About/>}> </Route>

            <Route path="/detail/:id" element={<Detail/>}> </Route>

            <Route path="/favorites" element={<Favorites onClose={onClose}/>}> </Route> 
            
            <Route path='*' element={<NotFound />}/>

         </Routes>
         
      </div>
   );
}

export default App;
