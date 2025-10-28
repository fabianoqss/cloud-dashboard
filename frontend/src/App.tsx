import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import FileManager from './pages/FileManager'
import Reports from './pages/Reports'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/file-manager" element={<FileManager />} />
      <Route path="/reports" element={<Reports />} />

    </Routes>

    </BrowserRouter>


    </>
  )
}

export default App
