import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cart-slice";
export default function CartTile({ cartItem }) {
  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }
  return (
    <div>
      <div className="flex items-center p-5 justify-between max-w-xl bg-red-600 mt-2 mb-2 rounded-3xl">
        <div className="flex p-3">
          <img
            src={cartItem?.image}
            alt={cartItem?.title}
            className="h-28 w-20 object-cover rounded-lg"
          />
          <div className="ml-4 self-center space-y-5">
            <h1 className="text-xl text-white font-bold">
              {cartItem?.title.slice(1, 10)}
            </h1>

            <p className="text-white font-extrabold">{cartItem?.price} $</p>
          </div>
        </div>
        <button
          className="self-end bg-red-500 cursor:pointer hover:bg-red-400 duration-500 text-white border-2 rounded-lg font-bold p-2 mt-2"
          onClick={handleRemoveFromCart}
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
}
