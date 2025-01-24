import { useShoppingCartStore } from "../stores";

export const ProductItem = ({ product }) => {
  const addToCart = useShoppingCartStore((state) => state.addToCart);

  return (
    <div style={{ width: '100%', marginTop: "10px", padding: "10px", border: "1px solid gray" }}>
      <h3>{product.name}</h3>
      <p>Prix : {product.price} €</p>
      <button onClick={() => addToCart(product)}>Ajouter au panier</button>
    </div>
  );
};
