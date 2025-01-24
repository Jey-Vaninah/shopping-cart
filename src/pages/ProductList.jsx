import { ProductItem } from "../components"
import { Cart } from "./Cart";
import { useShoppingCartStore } from '../stores';

export const ProductList = () => {
  const products = useShoppingCartStore(store => store.products);

  return (
    <div style={{ display: "flex", alignItems: "centrer", width: '100%', gap: "50px", padding: "0px 50px" }}>
      <div style={{ flex: 1 }}>
        <h2>Liste des Produits</h2>
        <div style={{ width: '100%', maxHeight: '400px', overflowY: "auto", marginBottom: "20px" }}>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Cart />
    </div>
  );
}; 0
