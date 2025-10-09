import 'react'
import { Routes, Route } from "react-router-dom";
import Overview from './Overview';
import Repositories from './Repositories';
import Packages from './Packages';
import People from './Peoples';
import Teams from './Teams';
import Projects from './Projects';
import Settings from './Settings';
import NotFoundPage from './NotFoundPages';
import '../styles/app.css'

const App = () => {
  // Aquí vamos a declarar nuestras rutas
  return (
    <Routes>
        <Route path='/' element={<Overview />} />
        <Route path='/repositories' element={<Repositories />} />
        <Route path='/packages' element={<Packages />}  />
        <Route path='/people' element={<People />} />
        <Route path='/teams' element={<Teams />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/*' element={<NotFoundPage />} />
   
    </Routes>
  )
}

export default App