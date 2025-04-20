import '../styles/AdminDashboard.css';
import { FaUserCog, FaFilm, FaDoorOpen, FaCalendarAlt, FaClipboardList } from 'react-icons/fa';

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <h2 className="sidebar-title">Admin</h2>
        <nav className="sidebar-menu">
          <a href="#"><FaUserCog /> Usuarios</a>
          <a href="#"><FaFilm /> Películas</a>
          <a href="#"><FaDoorOpen /> Salas</a>
          <a href="#"><FaCalendarAlt /> Funciones</a>
          <a href="#"><FaClipboardList /> Reservaciones</a>
        </nav>
      </aside>

      <main className="dashboard-content">
        <h1>Panel de Control</h1>
        <p>Selecciona una opción del menú lateral para comenzar.</p>
        {/* Aquí podés renderizar dinámicamente el contenido seleccionado */}
      </main>
    </div>
  );
}

export default AdminDashboard;