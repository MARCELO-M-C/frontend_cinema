import '../styles/Register.css';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

function Register() {
  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-icon"> <FaUser className="login-icon-image" /></div>
        <h2>Crear Cuenta</h2>
        <div className="register-field">
          <FaUser className="register-icon-input" />
          <input type="text" placeholder="Nombre de usuario" />
        </div>
        <div className="register-field">
          <FaEnvelope className="register-icon-input" />
          <input type="email" placeholder="Correo electrónico" />
        </div>
        <div className="register-field">
          <FaLock className="register-icon-input" />
          <input type="password" placeholder="Contraseña" />
        </div>
        <button className="register-button">Registrarse</button>
      </div>
    </div>
  );
}

export default Register;