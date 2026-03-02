import Menu from "./components/menu/Menu";

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function DashboardLayout({
  children,
  activeTab,
  setActiveTab,
}: DashboardLayoutProps) {
  return (
    <body className="bg-gray-100 min-h-screen">
      <Menu activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>{children}</main>
    </body>
  );
}
