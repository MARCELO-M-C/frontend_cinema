import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import Cartelera from './pages/Cartelera';
import RutaProtegida from './components/RutaProtegida';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Ruta protegida SOLO para admins */}
      <Route
        path="/AdminDashboard"
        element={
          <RutaProtegida tipoRequerido="admin">
            <AdminDashboard />
          </RutaProtegida>
        }
      />

      {/* Ruta protegida SOLO para clientes */}
      <Route
        path="/cartelera"
        element={
          <RutaProtegida tipoRequerido="cliente">
            <Cartelera />
          </RutaProtegida>
        }
      />
    </Routes>
  );
}

export default App;
