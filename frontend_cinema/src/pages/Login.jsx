import '../styles/Login.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



function Login() {
    const navigate = useNavigate();
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-icon">
            <FaUser className="login-icon-image" />
        </div>
        <div className="login-field">
          <FaUser className="login-icon-input" />
          <input type="text" placeholder="Email" />
        </div>
        <div className="login-field">
          <FaLock className="login-icon-input" />
          <input type="password" placeholder="Contraseña" />
        </div>
        <div className="login-options">
        </div>
        <button onClick={() => navigate('/AdminDashboard')} className="login-button">INICIAR SESIÓN</button>
      </div>
    </div>
  );
}

export default Login;