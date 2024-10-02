import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <Routes>
        {/* Definir la ruta para el componente Login */}
        <Route path="/login" element={<Login />} />
        {/* Puedes agregar más rutas aquí para otros componentes */}
      </Routes>
    </Router>
  );
}

export default App;