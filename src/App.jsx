import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './componentes/Navbar'

function App() {

  return (
    <div className='App'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
