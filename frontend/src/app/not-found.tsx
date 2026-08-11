import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
        <h1 className="text-4xl font-extrabold text-ink-900">404 — Page Not Found</h1>
        <p className="mt-4 text-ink-500">
          The patient record or page you are looking for could not be found.
        </p>
        <div className="mt-8">
          <Link
            href="/patients"
            className="inline-flex items-center gap-2 rounded-full brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:shadow-glow"
          >
            Back to patient cohort
          </Link>
        </div>
      </div>
    </main>
  );
}
