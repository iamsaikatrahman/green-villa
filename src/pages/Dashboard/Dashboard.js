import React, { useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import ManageOrders from "./ManageOrders";
import ManageProducts from "./ManageProducts";
import AddProduct from "./AddProduct";
import MakeAdmin from "./MakeAdmin";
import MyOrder from "./MyOrder";
import Pay from "./Pay";
import Review from "./Review";
import Sidebar from "./Sidebar";
import AdminRoute from "../Authentication/AdminRoute/AdminRoute";

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
            <AdminRoute exact path={`${path}/manageorders`}>
              <ManageOrders />
            </AdminRoute>
            <AdminRoute exact path={`${path}/manageproducts`}>
              <ManageProducts />
            </AdminRoute>
            <AdminRoute exact path={`${path}/addproduct`}>
              <AddProduct />
            </AdminRoute>
            <AdminRoute exact path={`${path}/makeadmin`}>
              <MakeAdmin />
            </AdminRoute>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
