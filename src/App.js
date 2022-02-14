import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Characters from './Pages/Characters'
import Home from './Pages/Home'
import Locations from './Pages/Locations'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/locations' element={<Locations />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
