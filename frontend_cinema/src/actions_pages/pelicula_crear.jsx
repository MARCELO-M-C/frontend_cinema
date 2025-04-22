import '../actions_pages_styles/pelicula_crear.css';
import { FaFilm, FaImage, FaClock, FaAlignLeft } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PeliculaCrear() {
  const [titulo, setTitulo] = useState('');
  const [posterUrl, setPosterUrl] = useState('');
  const [duracion, setDuracion] = useState('');
  const [sinopsis, setSinopsis] = useState('');
  const navigate = useNavigate();

  const handleCrear = async () => {
    try {
      const token = localStorage.getItem('token');

      await axios.post('http://localhost:3000/api/peliculas', {
        titulo,
        poster_url: posterUrl,
        duracion,
        sinopsis
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      alert('Película creada exitosamente');
      navigate('/AdminDashboard');
    } catch (error) {
      console.error('Error al crear película:', error);
      alert('Error al crear película');
    }
  };

  return (
    <div className="pelicula-crear-page">
      <div className="pelicula-crear-card">
        <h2>Crear Película</h2>

        <div className="pelicula-crear-field">
          <FaFilm className="pelicula-crear-icon" />
          <input
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>

        <div className="pelicula-crear-field">
          <FaImage className="pelicula-crear-icon" />
          <input
            type="text"
            placeholder="URL del póster"
            value={posterUrl}
            onChange={(e) => setPosterUrl(e.target.value)}
          />
        </div>

        <div className="pelicula-crear-field">
          <FaClock className="pelicula-crear-icon" />
          <input
            type="number"
            placeholder="Duración (min)"
            value={duracion}
            onChange={(e) => setDuracion(e.target.value)}
          />
        </div>

        <div className="pelicula-crear-field">
          <FaAlignLeft className="pelicula-crear-icon" />
          <input
            type="text"
            placeholder="Sinopsis"
            value={sinopsis}
            onChange={(e) => setSinopsis(e.target.value)}
          />
        </div>

        <button className="pelicula-crear-button" onClick={handleCrear}>
          Crear Película
        </button>
      </div>
    </div>
  );
}

export default PeliculaCrear;