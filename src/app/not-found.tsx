import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-black min-h-screen text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-lg text-gray-400">Page not found</p>
        <Link href="/" className="text-blue-500">
          Go back to home
        </Link>
      </div>
    </div>
  );
}
