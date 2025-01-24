import "./ProductItem.css"

export const ProductItem = ({ product }) => {
  return (
    <div className="product-item-card">
      <h3>{product.name}</h3>
      <p>Prix : {product.price} €</p>
      <button>Ajouter au panier</button>
    </div>
  );
};
