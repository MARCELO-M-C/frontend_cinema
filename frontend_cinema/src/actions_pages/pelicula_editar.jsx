import '../actions_pages_styles/pelicula_editar.css';
import { FaFilm, FaImage, FaClock, FaAlignLeft } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function PeliculaEditar() {
  const [titulo, setTitulo] = useState('');
  const [posterUrl, setPosterUrl] = useState('');
  const [duracion, setDuracion] = useState('');
  const [sinopsis, setSinopsis] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerPelicula = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`http://localhost:3000/api/peliculas/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        const datos = res.data.pelicula;

        setTitulo(datos.titulo ?? '');
        setPosterUrl(datos.poster_url ?? '');
        setDuracion(datos.duracion !== null ? String(datos.duracion) : '');
        setSinopsis(datos.sinopsis ?? '');
      } catch (error) {
        console.error('Error al obtener película:', error);
        alert('Error al cargar los datos de la película');
      }
    };

    obtenerPelicula();
  }, [id]);

  const handleEditar = async () => {
    try {
      const token = localStorage.getItem('token');

      await axios.put(`http://localhost:3000/api/peliculas/${id}`, {
        titulo,
        poster_url: posterUrl,
        duracion: parseInt(duracion),
        sinopsis
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      alert('Película actualizada correctamente');
      navigate('/AdminDashboard');
    } catch (error) {
      console.error('Error al editar película:', error);
      alert('Error al editar película');
    }
  };

  return (
    <div className="pelicula-editar-page">
      <div className="pelicula-editar-card">
        <h2>Editar Película</h2>

        <div className="pelicula-editar-field">
          <FaFilm className="pelicula-editar-icon" />
          <input
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>

        <div className="pelicula-editar-field">
          <FaImage className="pelicula-editar-icon" />
          <input
            type="text"
            placeholder="URL del póster"
            value={posterUrl}
            onChange={(e) => setPosterUrl(e.target.value)}
          />
        </div>

        <div className="pelicula-editar-field">
          <FaClock className="pelicula-editar-icon" />
          <input
            type="number"
            placeholder="Duración (min)"
            value={duracion}
            onChange={(e) => setDuracion(e.target.value)}
          />
        </div>

        <div className="pelicula-editar-field">
          <FaAlignLeft className="pelicula-editar-icon" />
          <input
            type="text"
            placeholder="Sinopsis"
            value={sinopsis}
            onChange={(e) => setSinopsis(e.target.value)}
          />
        </div>

        <button className="pelicula-editar-button" onClick={handleEditar}>
          Guardar Cambios
        </button>
      </div>
    </div>
  );
}

export default PeliculaEditar;