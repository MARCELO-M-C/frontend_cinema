import '../actions_pages_styles/sala_crear.css';
import { FaChair, FaThLarge, FaKeyboard } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SalaCrear() {
  const [nombre, setNombre] = useState('');
  const [filas, setFilas] = useState('');
  const [columnas, setColumnas] = useState('');
  const navigate = useNavigate();

  const handleCrear = async () => {
    try {
      const token = localStorage.getItem('token');

      await axios.post('http://localhost:3000/api/salas', {
        nombre,
        filas,
        columnas
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      alert('Sala creada exitosamente');
      navigate('/AdminDashboard');
    } catch (error) {
      console.error('Error al crear sala:', error);
      alert('Error al crear sala');
    }
  };

  return (
    <div className="sala-crear-page">
      <div className="sala-crear-card">
        <h2>Crear Sala</h2>

        <div className="sala-crear-field">
          <FaKeyboard className="sala-crear-icon" />
          <input
            type="text"
            placeholder="Nombre de la sala"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="sala-crear-field">
          <FaThLarge className="sala-crear-icon" />
          <input
            type="number"
            placeholder="Número de filas"
            value={filas}
            onChange={(e) => setFilas(e.target.value)}
          />
        </div>

        <div className="sala-crear-field">
          <FaChair className="sala-crear-icon" />
          <input
            type="number"
            placeholder="Número de columnas"
            value={columnas}
            onChange={(e) => setColumnas(e.target.value)}
          />
        </div>

        <button className="sala-crear-button" onClick={handleCrear}>
          Crear Sala
        </button>
        <button className="sala-volver-button" onClick={() => navigate('/AdminDashboard')}>
          Volver al Panel de Control
        </button>
      </div>
    </div>
  );
}

export default SalaCrear;