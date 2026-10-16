function Navbar() {
  return (
    <nav class="max-w-3xl mx-auto px-6 py-4 flex items-center gap-6 border-b border-stone-200">
      <a href="#" class="font-semibold mr-auto">
        Juan dela Cruz
      </a>
      <a href="#about" class="text-sm text-stone-600 hover:text-stone-900">
        About
      </a>
      <a href="#skills" class="text-sm text-stone-600 hover:text-stone-900">
        Skills
      </a>
      <a href="#projects" class="text-sm text-stone-600 hover:text-stone-900">
        Projects
      </a>
    </nav>
  );
}
export default Navbar;
