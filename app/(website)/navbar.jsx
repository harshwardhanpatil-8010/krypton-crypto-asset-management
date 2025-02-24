import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 w-full">
      <div className="container mx-auto flex h-full items-center justify-between px-6">
        <div className="flex items-center gap-8">
          
            <span className="font-bold text-2xl md:text-3xl text-white px-4">
              KRYPTON
            </span>
          
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="border-2 border-gray-400 bg-gradient-to-br from-[#090929] to-[#212139] text-white transition-all duration-300 transform hover:scale-105 px-6 py-2 text-lg rounded-xl"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
