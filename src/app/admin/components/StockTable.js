export default function StockTable ()
{
    const products = 
    [
        { id: 1, name: 'Produit A', stock: 10, price: 0.50 },
        { id: 2, name: 'Produit B', stock: 20, price: 3.5 },
    ];

    return (
        <table className="stock-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Produit</th>
              <th>Stock</th>
              <th>Prix</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.stock}</td>
                <td>{product.price.toFixed(2)} €</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }