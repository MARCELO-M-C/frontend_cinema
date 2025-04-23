import '../styles/Register.css';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const navigate = useNavigate();

  const handleRegistro = async () => {
    try {
      const res = await axios.post('http://localhost:3000/api/usuarios', {
        nombre,
        email,
        contraseña,
      });

      console.log('Usuario creado:', res.data);
      alert('Cuenta creada exitosamente');
      navigate('/login');
    } catch (error) {
      console.error('Error en el registro:', error.response?.data || error);
      alert('Error al crear cuenta');
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-icon">
          <FaUser className="login-icon-image" />
        </div>
        <h2>Crear Cuenta</h2>

        <div className="register-field">
          <FaUser className="register-icon-input" />
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div className="register-field">
          <FaEnvelope className="register-icon-input" />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="register-field">
          <FaLock className="register-icon-input" />
          <input
            type="password"
            placeholder="Contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
          />
        </div>

        <button className="register-button" onClick={handleRegistro}>
          Registrarse
        </button>
        <p className="register-link-text">
          ¿Ya tienes una cuenta?{' '}
          <span className="register-link" onClick={() => navigate('/login')}>
            Inicia sesión aquí
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;