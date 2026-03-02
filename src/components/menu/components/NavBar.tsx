import type { TabsProps } from "../../../types/selectionTabs";

export default function NavBar({ activeTab, setActiveTab }: TabsProps) {
  const MenuNav = ["Home", "Clearings", "Organizations", "Reports"];
  return (
    <div id="nav-bar" className="flex gap-6 text-gray-400 text-sm">
      {MenuNav.map((item) => (
        <p
          key={item}
          className={`cursor-pointer hover:text-white transition-colors ${activeTab === item ? "text-white" : ""}`}
          onClick={() => setActiveTab(item)}
        >
          {item}
        </p>
      ))}
    </div>
  );
}
