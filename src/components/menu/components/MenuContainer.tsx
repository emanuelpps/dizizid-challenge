import Logo from "./Logo";
import NavBar from "./NavBar";

export default function MenuContainer() {
  return (
    <nav className="flex justify-between items-center mb-2 px-4">
      <Logo />
      <NavBar />
    </nav>
  );
}
