export default function NotFound() {
  return (
    <section className="place-items-center">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-base text-gray-600">Извините, мы не нашли запрашиваемую страницу</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            На главную
          </a>
        </div>
      </div>
    </section>
  );
}
