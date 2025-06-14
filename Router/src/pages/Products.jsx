import { Link, useNavigate } from 'react-router-dom'

function Products() {
  const navigate = useNavigate()
  const products = [
    { id: 1, name: 'Ürün 1' },
    { id: 2, name: 'Ürün 2' },
    { id: 3, name: 'Ürün 3' },
  ]

  const handleNavigate = (id) => {
    navigate(`/products/${id}`)
  }

  return (
    <div>
      <h1>Ürünler</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.name}
            </Link>
            <button 
              onClick={() => handleNavigate(product.id)}
              style={{ marginLeft: '10px' }}
            >
              useNavigate ile git
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products