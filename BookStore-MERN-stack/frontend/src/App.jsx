import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateBook from './pages/CreateBooks'
import ShowBook from './pages/ShowBook'
import EditBook from './pages/EditBook'
import DeleteBooks from './pages/DeleteBooks'

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/books/create' element={<CreateBook />} />
    <Route path='/books/details/:id' element={<ShowBook />} />
    <Route path='/books/edit/:id' element={<EditBook />} />      {/* Ruta correcta */}
    <Route path='/books/delete/:id' element={<DeleteBooks />} />  {/* Ruta correcta */}
   </Routes>
  )
}

export default App