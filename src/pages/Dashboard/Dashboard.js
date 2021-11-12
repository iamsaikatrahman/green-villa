import React, { useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import MyOrder from "./MyOrder";
import Pay from "./Pay";
import Review from "./Review";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  let { path, url } = useRouteMatch();

  return (
    <div>
      {/* // dashboard */}
      <div className="flex h-screen overflow-hidden ">
        {/* Sidebar */}
        <Sidebar
          sidebarOpen={sidebarOpen}
          path={path}
          url={url}
          setSidebarOpen={setSidebarOpen}
        />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <DashboardHeader
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <Switch>
            <Route exact path={`${path}/pay`}>
              <Pay />
            </Route>
            <Route exact path={path}>
              <MyOrder />
            </Route>
            <Route exact path={`${path}/review`}>
              <Review />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
