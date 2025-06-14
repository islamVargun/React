import { useNavigate, useLocation } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', 'true')
    navigate(from, { replace: true })
  }

  return (
    <div>
      <h1>Giriş Sayfası</h1>
      <button onClick={handleLogin}>Giriş Yap</button>
    </div>
  )
}

export default Login