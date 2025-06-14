import { useSearchParams, generatePath } from 'react-router-dom'

function Search() {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') || ''

  // generatePath örneği
  const productPath = generatePath("/products/:id", { id: 123 })

  const handleSearch = (e) => {
    const value = e.target.value
    if (value) {
      setSearchParams({ q: value })
    } else {
      setSearchParams({})
    }
  }

  return (
    <div>
      <h1>Arama Sayfası</h1>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Arama yapın..."
      />
      {query && (
        <p>Aranan: {query}</p>
      )}
      <p>Örnek generatePath: {productPath}</p>
    </div>
  )
}

export default Search