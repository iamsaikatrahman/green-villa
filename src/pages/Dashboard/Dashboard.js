import React from "react";
import { useState } from "react/cjs/react.development";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      {/* // dashboard */}
      <div className="flex h-screen overflow-hidden ">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <DashboardHeader
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <div className="pt-20">Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
          <div>Content</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
