import type { TabsProps } from "../../../types/selectionTabs";
import Logo from "./Logo";
import NavBar from "./NavBar";

export default function MenuContainer({ activeTab, setActiveTab }: TabsProps) {
  return (
    <nav className="flex justify-between items-center mb-2 px-4">
      <Logo />
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </nav>
  );
}
