import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 to-black to-45% grid min-h-full w-full grid-cols-1 grid-rows-[1fr,auto,1fr] lg:grid-cols-[max(50%,36rem),1fr]">
        <main className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
          <div className="max-w-lg">
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-8xl">404</h1>
            <Link href="/" className="mt-6 text-xl leading-7 text-gray-300 group">
              Będą mi tu myszkować, łobuzy <span className="group-focus:opacity-0 opacity-100">jedne</span><span className="opacity-0 group-focus:opacity-100">jebane</span>
            </Link>
            <div className="mt-2">
              <Link href="/" className="text-sm font-semibold leading-7 text-indigo-500">
                <span aria-hidden="true">&larr;</span> Wypad na stronę główną!
              </Link>
            </div>
          </div>
        </main>

        <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
          <img
            src="/404.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  )
}