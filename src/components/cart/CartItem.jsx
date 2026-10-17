import ImageFrame from "../ui/ImageFrame.jsx";
import IconButton from "../ui/IconButton.jsx";
import QuantityControl from "../ui/QuantityControl.jsx";
import { formatPrice } from "../../utils/format.js";
import TrashIcon from "./TrashIcon.jsx";

export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  const { id, name, price, image, alt, quantity } = item;

  return (
    <li className="cart-item">
      <ImageFrame className="cart-item__thumb" src={image} alt={alt} />
      <div className="cart-item__info">
        <h4>{name}</h4>
        <p className="cart-item__unit">{formatPrice(price)} each</p>
        <QuantityControl
          name={name}
          quantity={quantity}
          onIncrease={() => onIncrease(id)}
          onDecrease={() => onDecrease(id)}
        />
      </div>
      <div className="cart-item__side">
        <IconButton label={`Remove ${name}`} tone="danger" onClick={() => onRemove(id)}>
          <TrashIcon />
        </IconButton>
        <strong className="cart-item__line-total">{formatPrice(price * quantity)}</strong>
      </div>
    </li>
  );
}
