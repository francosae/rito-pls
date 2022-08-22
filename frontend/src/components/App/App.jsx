import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NextUIProvider, Table, Collapse, Text } from "@nextui-org/react";
/* Components */
import Landing from '../Landing/Landing';
/* */
import API from '../../services/apiClient';
import './App.css'

export default function AppContainer(){
  return(
    <NextUIProvider>
      <App/>
    </NextUIProvider>
  )
}
async function test(){
  const response = await API.fetchPUUID("No Poon Intended")
  console.log(response)
}

test()

function App() {
  return (
    <h1>
      hello
    </h1>
    // <div className='App'>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Landing /> } />
    //     </Routes>
    //   </BrowserRouter>
    // </div>
  )
}
