import '../actions_pages_styles/sala_editar.css';
import { FaChair, FaThLarge, FaKeyboard } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function SalaEditar() {
  const [nombre, setNombre] = useState('');
  const [filas, setFilas] = useState('');
  const [columnas, setColumnas] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerSala = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`http://localhost:3000/api/salas/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        console.log("Sala recibida:", res.data);

        const datos = res.data.sala; 

        setNombre(datos.nombre ?? '');
        setFilas(datos.filas !== undefined && datos.filas !== null ? String(datos.filas) : '');
        setColumnas(datos.columnas !== undefined && datos.columnas !== null ? String(datos.columnas) : '');

      } catch (error) {
        console.error('Error al obtener sala:', error);
        alert('Error al cargar los datos de la sala');
      }
    };

    obtenerSala();
  }, [id]);

  const handleEditar = async () => {
    try {
      const token = localStorage.getItem('token');

      await axios.put(`http://localhost:3000/api/salas/${id}`, {
        nombre,
        filas: parseInt(filas),
        columnas: parseInt(columnas)
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      alert('Sala actualizada correctamente');
      navigate('/AdminDashboard');
    } catch (error) {
      console.error('Error al editar sala:', error);
      alert('Error al editar sala');
    }
  };

  return (
    <div className="sala-editar-page">
      <div className="sala-editar-card">
        <h2>Editar Sala</h2>

        <div className="sala-editar-field">
          <FaKeyboard className="sala-editar-icon" />
          <input
            type="text"
            placeholder="Nombre de la sala"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="sala-editar-field">
          <FaThLarge className="sala-editar-icon" />
          <input
            type="number"
            placeholder="Número de filas"
            value={filas}
            onChange={(e) => setFilas(e.target.value)}
          />
        </div>

        <div className="sala-editar-field">
          <FaChair className="sala-editar-icon" />
          <input
            type="number"
            placeholder="Número de columnas"
            value={columnas}
            onChange={(e) => setColumnas(e.target.value)}
          />
        </div>

        <button className="sala-editar-button" onClick={handleEditar}>
          Guardar Cambios
        </button>
      </div>
    </div>
  );
}

export default SalaEditar;