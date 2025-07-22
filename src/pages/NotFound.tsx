import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      `404 Error: Attempted to access non-existent route: ${location.pathname}`
    );
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <section className="text-center space-y-6">
        <h1 className="text-6xl font-extrabold text-gray-800 animate-pulse">
          404
        </h1>
        <p className="text-2xl text-gray-600">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go Home
        </Link>
      </section>
    </main>
  );
};

export default NotFound;
