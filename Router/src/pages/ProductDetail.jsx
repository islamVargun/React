import { useParams, Link } from 'react-router-dom'

function ProductDetail() {
  const { id } = useParams()

  return (
    <div>
      <h1>Ürün Detay</h1>
      <p>Ürün ID: {id} Sa</p>
      <Link to="/products">Ürünlere Geri Dön</Link>
    </div>
  )
}

export default ProductDetail