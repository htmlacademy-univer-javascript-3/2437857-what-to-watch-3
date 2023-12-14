import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="place-items-center">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-3xl font-bold text-gray-900">Page not found</h1>
        <p className="mt-6 text-base text-gray-600">Извините, мы не нашли запрашиваемую страницу</p>
        <div className="mt-10 flex items-center justify-center">
          <Link
            className="rounded-md bg-indigo-600 text-sm font-semibold text-white shadow-sm"
            to="/"
          >На главную
          </Link>
        </div>
      </div>
    </section>
  );
}
