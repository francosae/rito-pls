import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NextUIProvider, Table, Collapse, Text } from "@nextui-org/react";
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
  const response = await API.fetchPUUID("DeclaringIntent")
  console.log(response)
}

test()

function App() {
  return (
    <div>
    </div>
  )
}
