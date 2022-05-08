import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'; 
import Fahim from './Fahim';
import Umer from './Umer';
function App() {


  return (
    <div className="App">
    <BrowserRouter /*Wrap entire div content with browser router for using route components*/>
       <Routes /*Routes tag used to contain all the invididual route paths to the pages, route tag is each individual path defined*/ >
         <Route path="/"element={<><Fahim /> <Umer /> </>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;