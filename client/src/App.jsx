import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import {Outlet} from "react-router-dom"

function App() {

  return (
    <div className='w-screen min-h-screen bg-white flex flex-col justify-between'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
