import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Login from "./pages/Authentication/Login/Login";
import PrivateRoute from "./pages/Authentication/PrivateRoute/PrivateRoute";
import Registration from "./pages/Authentication/Registration/Registration";
import Dashboard from "./pages/Dashboard/Dashboard";
import Explore from "./pages/Explore/Explore";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/explore">
              <Explore />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/service/:id">
              <ServiceDetails />
            </PrivateRoute>
            <Route exact path="/registration">
              <Registration />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
