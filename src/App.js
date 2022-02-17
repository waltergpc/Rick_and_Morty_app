import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Characters from './Pages/Characters'
import Home from './Pages/Home'
import Locations from './Pages/Locations'
import SingleCharacter from './Pages/SingleCharacter'
import SingleLocation from './Pages/SingleLocation'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/characters/:id' element={<SingleCharacter />} />
        <Route path='/locations/:id' element={<SingleLocation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
