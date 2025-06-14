import { useMemo, useState } from "react";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [items] = useState([
    "Apple",
    "Banana",
    "Orange",
    "Pineapple",
    "Grapes",
    "Strawberry",
    "Tesla",
    "Wolkswagen",
    "Samsung",
    "Temu",
   
  ]);

  const filteredItems = useMemo(() => {
    console.log("Filtering items...");
    return items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, items]);
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search items"
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;

// import { useMemo, useState, useEffect } from "react";

// function StockDashboard() {
//   const [stockData, setStockData] = useState([]);
//   const [filterTerm, setFilterTerm] = useState("");

//   // API'den borsa verisini çekmek için useEffect
//   useEffect(() => {
//     const fetchStockData = async () => {
//       const response = await fetch("https://api.example.com/stocks");
//       const data = await response.json();
//       setStockData(data);
//     };

//     fetchStockData();
//     const intervalId = setInterval(fetchStockData, 10000); // 10 saniyede bir güncelle

//     return () => clearInterval(intervalId); // Component unmount olduğunda interval'ı temizle
//   }, []);

//   // Filtreleme işlemi, sadece 'stockData' veya 'filterTerm' değiştiğinde yapılacak
//   const filteredStocks = useMemo(() => {
//     console.log("Filtering stocks...");
//     return stockData.filter((stock) =>
//       stock.name.toLowerCase().includes(filterTerm.toLowerCase())
//     );
//   }, [stockData, filterTerm]);

//   return (
//     <div>
//       <input
//         type="text"
//         value={filterTerm}
//         onChange={(e) => setFilterTerm(e.target.value)}
//         placeholder="Search stocks"
//       />
//       <ul>
//         {filteredStocks.map((stock) => (
//           <li key={stock.id}>
//             {stock.name}: ${stock.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default StockDashboard;
