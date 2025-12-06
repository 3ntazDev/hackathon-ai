"use client";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">مرحباً بك في تجربة AI للحوادث</h1>
      <button
        className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition"
        onClick={() => router.push("/service")}
      >
        انتقل للتجربة
      </button>
    </div>
  );
}
