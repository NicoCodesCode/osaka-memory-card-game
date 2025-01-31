import { Link } from "react-router-dom";

export default function LinkButton({ children, path }) {
  return (
    <div className="z-10">
      <Link to={path}>
        <button className="bg-yellow-200 text-orange-700 font-bold py-2 px-6 rounded-lg shadow-md hover:scale-110 transition ease-in-out">
          {children}
        </button>
      </Link>
    </div>
  );
}
