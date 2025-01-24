
import { ProductItem } from '../components';
import { useShoppingCartStore } from '../stores';

export const ProductList = () => {
  const products = useShoppingCartStore(store => store.products);

  return (
    <div>
      <h2>Liste des Produits</h2>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};
