import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-2 text-center border-t border-gray-500">
      <div className="flex flex-col justify-between items-center text-sm text-white">
        <p className="w-full mb-0 text-center">
          &copy; {new Date().getFullYear()} Tu Academia. Todos los derechos
          reservados.
        </p>

        <div className="flex gap-2 items-center">
          <Link href="/terms" className="hover:underline">
            Términos de Servicio
          </Link>
          <Link href="/privacy-policy" className="hover:underline">
            Política de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
