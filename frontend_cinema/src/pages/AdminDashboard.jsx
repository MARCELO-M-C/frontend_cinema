import { useState } from 'react';
import '../styles/AdminDashboard.css';
import { FaUserCog, FaFilm, FaDoorOpen, FaCalendarAlt, FaClipboardList } from 'react-icons/fa';

function AdminDashboard() {
  const [seccion, setSeccion] = useState(null);

  const renderContenido = () => {
    switch (seccion) {
      case 'usuarios':
        return renderUsuarios();
      case 'peliculas':
        return renderPeliculas();
      case 'salas':
        return renderSalas();
      case 'funciones':
        return renderFunciones();
      case 'reservaciones':
        return renderReservaciones();
      default:
        return (
          <>
            <h1>Panel de Control</h1>
            <p>Selecciona una opción del menú lateral para comenzar.</p>
          </>
        );
    }
  };

  const renderUsuarios = () => (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );

  const renderPeliculas = () => (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Duración</th>
          <th>Sinopsis</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );

  const renderSalas = () => (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Filas</th>
          <th>Columnas</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );

  const renderFunciones = () => (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Película</th>
          <th>Sala</th>
          <th>Fecha</th>
          <th>Hora</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );

  const renderReservaciones = () => (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Usuario</th>
          <th>Función</th>
          <th>Fila</th>
          <th>Columna</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <h2 className="sidebar-title">Administración</h2>
        <nav className="sidebar-menu">
          <a onClick={() => setSeccion('usuarios')}><FaUserCog /> Usuarios</a>
          <a onClick={() => setSeccion('peliculas')}><FaFilm /> Películas</a>
          <a onClick={() => setSeccion('salas')}><FaDoorOpen /> Salas</a>
          <a onClick={() => setSeccion('funciones')}><FaCalendarAlt /> Funciones</a>
          <a onClick={() => setSeccion('reservaciones')}><FaClipboardList /> Reservaciones</a>
        </nav>
      </aside>

      <main className="dashboard-content">
        {renderContenido()}
      </main>
    </div>
  );
}

export default AdminDashboard;
