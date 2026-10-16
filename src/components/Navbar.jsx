import NavLink from "./NavLink";

function Navbar() {
  return (
    <nav class="max-w-3xl mx-auto px-6 py-4 flex items-center gap-6 border-b border-stone-200">
      <a href="#" class="font-semibold mr-auto">
        Juan dela Cruz
      </a>
      <NavLink href="#about" text="About" />
      <NavLink href="#skills" text="Skills" />
      <NavLink href="#projects" text="Projects" />
    </nav>
  );
}
export default Navbar;
