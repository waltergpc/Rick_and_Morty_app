import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Characters from './Pages/Characters'
import Episodes from './Pages/Episodes'
import Home from './Pages/Home'
import Locations from './Pages/Locations'
import SingleCharacter from './Pages/SingleCharacter'
import SingleEpisode from './Pages/SingleEpisode'
import SingleLocation from './Pages/SingleLocation'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/episodes' element={<Episodes />} />
        <Route path='/characters/:id' element={<SingleCharacter />} />
        <Route path='/locations/:id' element={<SingleLocation />} />
        <Route path='/episodes/:id' element={<SingleEpisode />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
