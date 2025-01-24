import { CartItem } from '../components/CartItem';
import { useShoppingCartStore } from '../stores';

export const Cart = () => {
  const cart = useShoppingCartStore((state) => state.cart);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={{ flex: 1 }}>
      <h2>Panier</h2>
      {cart.length === 0 && <p>Votre panier est vide.</p>}
      <div style={{ width: '100%', maxHeight: '400px', overflowY: "auto", marginBottom: "20px" }}>
        {cart.map((item) => (
          <CartItem key={item.id} cart={item} />
        ))}
      </div>
      <h3>Prix Total : {totalPrice} €</h3>
    </div>
  );
};
