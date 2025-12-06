"use client";

import Link from "next/link";

export default function ReportPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-4">
      <h1 className="text-3xl font-bold">تقديم بلاغ حادث</h1>
      <Link href="/report/status">
        <button className="px-6 py-3 bg-yellow-600 text-white rounded hover:bg-yellow-700">
          تحقق من حالة البلاغ
        </button>
      </Link>
    </main>
  );
}
