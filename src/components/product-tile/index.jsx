import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cart-slice";

export default function ProductTile({ product }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  function handleAddToCart() {
    dispatch(addToCart(product));
  }
  function handleRemoveCart() {
    dispatch(removeFromCart(product?.id));
  }

  return (
    <div>
      <div className="group flex justify-center flex-col border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl shadow-xl  ">
        <div className="h-[180px] items-center">
          <img
            src={product?.image}
            alt={product?.title}
            className="object-cover h-full w-full "
          />
        </div>
        <div className="justify-center flex">
          <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-large">
            {product?.title}
          </h1>
        </div>
        <h2 className="flex justify-center font-bold text-green-600">
          {product?.price} $
        </h2>
        <div className=" flex items-center justify-center w-full mt-5">
          <button
            onClick={
              cart.some((item) => item.id === product.id)
                ? handleRemoveCart
                : handleAddToCart
            }
            className="bg-red-900 cursor:pointer hover:bg-red-600 duration-500 text-white border-2 rounded-lg font-bold p-3"
          >
            {cart.some((item) => item.id === product.id) ? "Remove " : "Add "}
          </button>
        </div>
      </div>
    </div>
  );
}
