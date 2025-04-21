import '../styles/Cartelera.css';
import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Cartelera() {
  const navigate = useNavigate();
  const [peliculas, setPeliculas] = useState([]);

  const cerrarSesion = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    navigate('/login');
  };

  useEffect(() => {
    const obtenerPeliculas = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/peliculas');
        setPeliculas(res.data.peliculas);
      } catch (error) {
        console.error('Error al cargar las películas:', error);
      }
    };

    obtenerPeliculas();
  }, []);

  return (
    <div className="cartelera-container">
      {/* Encabezado fijo */}
      <header className="cartelera-header">
        <h1 className="cartelera-title">Esta es nuestra cartelera</h1>
        <div className="cartelera-actions">
          <button className="btn-comprar">Comprar boleto</button>
          <div className="user-menu">
            <button className="logout-icon-button" onClick={cerrarSesion}>
              <FaSignOutAlt className="logout-icon" />
            </button>
          </div>
        </div>
      </header>

      {/* Películas (aparecen debajo del header) */}
      <section className="peliculas-grid">
        {peliculas.length === 0 ? (
          <p>Cargando películas...</p>
        ) : (
          peliculas.map((pelicula) => (
            <div className="pelicula-card" key={pelicula.id}>
              <img src={pelicula.poster_url} alt={pelicula.titulo} />
              <div className="pelicula-info">
                <h3>{pelicula.titulo}</h3>
                <p>{pelicula.sinopsis}</p>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
}

export default Cartelera;