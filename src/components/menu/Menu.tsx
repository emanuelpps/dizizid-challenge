import type { TabsProps } from "@/types/selectionTabs";
import MenuContainer from "@components/menu/components/MenuContainer";

export default function Menu({ activeTab, setActiveTab }: TabsProps) {
  return (
    <header className="bg-[#181818] text-white p-4 border-b border-gray-700">
      <MenuContainer activeTab={activeTab} setActiveTab={setActiveTab} />
    </header>
  );
}
