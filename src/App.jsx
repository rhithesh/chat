import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Leftbar from './components/Leftbar'
import Sidebar from './components/Sidebar'
import Textarea from './components/Textarea'

function App() {

  return(
    <div className='setup'> 
   
    <Sidebar/>

    <Leftbar styler="right-p" >
    <Textarea />


    </Leftbar>
    





    </div>
  )
}

export default App
