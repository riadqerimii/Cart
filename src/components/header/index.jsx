import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="flex border-b-2 border-blue-200 my-5  items-center justify-between h-20 max-w-6xl mx-auto">
      <Link to={"/"}>
        <div className=" ml-5">
          <h1 className="text-red-900 font-bold  text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
            Shopping Cart
          </h1>
        </div>
      </Link>
      <ul className=" flex items-center  space-x-6 text-gray-600 font-semibold">
        <Link
          to={"/"}
          className=" cursor-pointer hover:text-blue-500 duration-300"
        >
          Home
        </Link>
        <Link
          to={"/cart"}
          className=" cursor-pointer hover:text-blue-500 duration-300"
        >
          Cart
        </Link>
      </ul>
    </nav>
  );
}
