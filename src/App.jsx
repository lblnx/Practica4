import { useState } from 'react'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [currentUser, setCurrentUser] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    setError('')

    // Validación básica
    if (!username.trim() || !password.trim()) {
      setError('Por favor completa todos los campos')
      return
    }

    if (password.length < 4) {
      setError('La contraseña debe tener al menos 4 caracteres')
      return
    }

    // Login exitoso
    setIsLoggedIn(true)
    setCurrentUser(username)
    setUsername('')
    setPassword('')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentUser('')
    setError('')
  }

  return (
    <div className='app-container'>
      {!isLoggedIn ? (
        <div className='login-container'>
          <div className='login-card'>
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleLogin}>
              <div className='form-group'>
                <label htmlFor='username'>Usuario:</label>
                <input
                  type='text'
                  id='username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder='Ingresa tu usuario'
                  required
                />
              </div>

              <div className='form-group'>
                <label htmlFor='password'>Contraseña:</label>
                <input
                  type='password'
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Ingresa tu contraseña'
                  required
                />
              </div>

              {error && <p className='error-message'>{error}</p>}

              <button type='submit' className='login-button'>
                Entrar
              </button>
            </form>
            <p className='info-text'>
              Prueba con cualquier usuario y contraseña (mínimo 4 caracteres)
            </p>
          </div>
        </div>
      ) : (
        <div className='dashboard-container'>
          <div className='dashboard-card'>
            <h1>¡Bienvenido!</h1>
            <p className='welcome-text'>Hola, <strong>{currentUser}</strong></p>
            <p>Has iniciado sesión correctamente.</p>
            <button onClick={handleLogout} className='logout-button'>
              Cerrar Sesión
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
