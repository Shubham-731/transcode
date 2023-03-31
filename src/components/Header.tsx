export default function Header() {
  return (
    <header className="px-6 py-3 md:px-10 md:py-5 bg-black/75 flex items-center justify-between gap-5">
      <h2 className="text-xl font-semibold text-white">
        Trans<span className="font-bold text-pink-500">Code</span>
      </h2>
      <p className="hidden md:block text-sm text-white/75">
        Unlock the Power of Multilingual Programming with Trans
        <span className="font-semibold text-pink-500">Code</span>!
      </p>
    </header>
  );
}
