import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Listings from './pages/Listings'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index exact element={<Home />} />
        <Route path='/listings' element={<Listings />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App