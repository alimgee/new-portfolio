import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="container text-center py-20">
        <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-8 text-lg">Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/" className="btn btn-primary">Go Home</Link>
      </div>
    </main>
  );
}