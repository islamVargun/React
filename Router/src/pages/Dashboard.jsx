import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.setItem('isAuthenticated', 'false')
    navigate('/')
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bu sayfa sadece giriş yapmış kullanıcılar tarafından görüntülenebilir.</p>
      <button onClick={handleLogout}>Çıkış Yap</button>
    </div>
  )
}

export default Dashboard