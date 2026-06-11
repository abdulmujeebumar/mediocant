export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        
        <div className="text-sm uppercase tracking-[0.35em] text-zinc-400">
          MEDIOCANT
        </div>

        <nav className="hidden gap-10 text-sm text-zinc-500 md:flex">
          <a
            href="#"
            className="transition-colors duration-300 hover:text-white"
          >
            Philosophy
          </a>

          <a
            href="#"
            className="transition-colors duration-300 hover:text-white"
          >
            Systems
          </a>

          <a
            href="#"
            className="transition-colors duration-300 hover:text-white"
          >
            Projects
          </a>

          <a
            href="#"
            className="transition-colors duration-300 hover:text-white"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
