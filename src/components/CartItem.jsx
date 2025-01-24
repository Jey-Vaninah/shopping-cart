import { useShoppingCartStore } from "../stores";

export const CartItem = ({ cart }) => {
  const updateQuantity = useShoppingCartStore((state) => state.updateQuantity);
  const removeFromCart = useShoppingCartStore((state) => state.removeFromCart);

  return (
    <div style={{ width: '100%', marginTop: "10px", padding: "10px", border: "1px solid gray" }}>
      <h4>{cart.name}</h4>
      <p>Prix unitaire : {cart.price} €</p>
      <p>Quantité : {cart.quantity}</p>
      <p>Prix total : {cart.price * cart.quantity} €</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <button style={{ padding: "7px 10px" }} onClick={() => updateQuantity(cart.id, 1)}>+</button>
        <button style={{ padding: "7px 10px" }} onClick={() => updateQuantity(cart.id, -1)}>-</button>
        <button style={{ padding: "7px 0px" }} onClick={() => removeFromCart(cart.id)}>Supprimer</button>
      </div>
    </div>
  );
};
