import { useState, useEffect } from 'react'
import apiClient from '../../services/apiClient'
import axios from 'axios'
import './App.css'

function App() {
  
  useEffect(() =>{
    async function zipUp(){
      axios.get(`/send`)
      .then(res => {
        console.log(res);
      })
    }
    zipUp()
  })

  return (
    <h1>
      hi 
    </h1>
  )
}

export default App
