import { useState } from "react";
import DashboardLayout from "./DashboardLayout";
import Clearings from "./views/clearings/Clearings";

function App() {
  const [activeTab, setActiveTab] = useState("clearings");

  return (
    <DashboardLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      {activeTab === "clearings" && <Clearings />}
      {activeTab === "organizations" && <div>Organizations Content</div>}
      {activeTab === "reports" && <div>Reports Content</div>}
      {activeTab === "home" && <div>Home Content</div>}
    </DashboardLayout>
  );
}

export default App;
