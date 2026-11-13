import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-start justify-center px-6 py-24">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-3xl font-bold">ページが見つかりません</h1>
      <Link href="/" className="mt-6 text-accent underline-offset-4 hover:underline">
        トップへ戻る →
      </Link>
    </main>
  );
}
