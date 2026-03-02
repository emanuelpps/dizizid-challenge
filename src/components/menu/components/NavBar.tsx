export default function NavBar() {
  const MenuNav = ["Home", "Clearings", "Organizations", "Reports"];
  return (
    <div id="nav-bar" className="flex gap-6 text-gray-400 text-sm">
      {MenuNav.map((item) => (
        <p key={item} className="cursor-pointer hover:text-white transition-colors">
          {item}
        </p>
      ))}
    </div>
  );
}
