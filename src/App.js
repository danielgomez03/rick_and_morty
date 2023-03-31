import './App.css';
import Cards from './components/Cards';
import Nav from './components/Nav';
import React, { useState, useEffect  } from 'react';
import axios from "axios";
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import NotFound from './components/NotFound';
import Login from './components/Login';




function App() {
   
   const [characters, setCharacters] = React.useState([]);
   
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            let exist =  characters.find((ch)=>ch.id === data.id);
            if(exist) {
               alert("Ya existe");
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

         <Nav onSearch={onSearch}/>  
         
         <Routes>
            <Route path="/" element={<Login/>}></Route>

            <Route path="/home" element={<Cards onClose={onClose} characters={characters}></Cards>}> </Route> 

            <Route path="/about" element={<About/>}> </Route>

            <Route path="/detail/:id" element={<Detail/>}> </Route>
            
            <Route path='*' element={<NotFound />}/>

         </Routes>
         
      </div>
   );
}

export default App;
