import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full text-center">
      <h1 className="text-4xl font-bold text-white mb-2">404</h1>
      <p className="text-lg text-gray-300">Página no encontrada</p>
      <Button asChild>
        <Link href="/" className="mt-4">
          Volver al inicio
        </Link>
      </Button>
    </div>
  );
}
