import '../actions_pages_styles/funcion_crear.css';
import { FaFilm, FaVideo, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function FuncionCrear() {
  const [peliculaId, setPeliculaId] = useState('');
  const [salaId, setSalaId] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [peliculas, setPeliculas] = useState([]);
  const [salas, setSalas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cargarDatos = async () => {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };

      const [resPeliculas, resSalas] = await Promise.all([
        axios.get('http://localhost:3000/api/peliculas', config),
        axios.get('http://localhost:3000/api/salas', config)
      ]);

      setPeliculas(resPeliculas.data.peliculas ?? []);
      setSalas(resSalas.data.salas ?? []);
    };

    cargarDatos();
  }, []);

  const handleCrear = async () => {
    try {
      const token = localStorage.getItem('token');

      await axios.post('http://localhost:3000/api/funciones', {
        pelicula_id: peliculaId,
        sala_id: salaId,
        fecha,
        hora
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      alert('Función creada exitosamente');
      navigate('/AdminDashboard');
    } catch (error) {
      console.error('Error al crear función:', error);
      alert('Error al crear función');
    }
  };

  return (
    <div className="funcion-crear-page">
      <div className="funcion-crear-card">
        <h2>Crear Función</h2>

        <div className="funcion-crear-field">
          <FaFilm className="funcion-crear-icon" />
          <select value={peliculaId} onChange={(e) => setPeliculaId(e.target.value)}>
            <option value="">Seleccionar Película</option>
            {peliculas.map(p => (
              <option key={p.id} value={p.id}>{p.titulo}</option>
            ))}
          </select>
        </div>

        <div className="funcion-crear-field">
          <FaVideo className="funcion-crear-icon" />
          <select value={salaId} onChange={(e) => setSalaId(e.target.value)}>
            <option value="">Seleccionar Sala</option>
            {salas.map(s => (
              <option key={s.id} value={s.id}>{s.nombre}</option>
            ))}
          </select>
        </div>

        <div className="funcion-crear-field">
          <FaCalendarAlt className="funcion-crear-icon" />
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="funcion-crear-field">
          <FaClock className="funcion-crear-icon" />
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          />
        </div>

        <button className="funcion-crear-button" onClick={handleCrear}>
          Crear Función
        </button>
        <button className="funcion-volver-button" onClick={() => navigate('/AdminDashboard')}>
          Volver al Panel de Control
        </button>
      </div>
    </div>
  );
}

export default FuncionCrear;