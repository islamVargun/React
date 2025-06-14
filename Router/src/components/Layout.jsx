import { Outlet, NavLink, useLocation } from 'react-router-dom'

function Layout() {
  const location = useLocation()
  
  return (
    <div>
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Ana Sayfa
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Hakkımızda
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/products"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Ürünler
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/search"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Arama
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/dashboard"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="location-info">
        Şu an bulunduğunuz sayfa: {location.pathname}
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout