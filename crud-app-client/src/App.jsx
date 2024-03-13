import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateCrud from './component/CreateCrud'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ViewCrud from './component/ViewCrud'
import UpdateCrud from './component/UpdateCrud'
function App() {

  return (
    <BrowserRouter >
      <Routes>
         <Route exact path ='/' element={<CreateCrud/>} />
         <Route exact path ='/cruds' element={<ViewCrud/>} />
         <Route exact path ="/updatecrud/:bid"element={<UpdateCrud />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
