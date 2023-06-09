import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home/index.jsx'
import AulasAgendadas from './pages/AulasAgendadas/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      {/* // outlet */}
      <Route path='/' element={<App />}>
        <Route path='/' element={<Home />} />
        <Route path='/aulas-agendadas' element={<AulasAgendadas />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
