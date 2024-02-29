

import { useState } from 'react'
import './App.css'
import MyForm from './components/MyForm'

function App() {
  const [someText, setSomeTExt] = useState('');

  const getFormData = (text) => {
    setSomeTExt(text);
  }
  

  return (
    <>
      
      <h1>Form Demo</h1>
      <MyForm action={getFormData} />
      <p>{someText}</p>
   
     

  
    </>
  )
}

export default App
