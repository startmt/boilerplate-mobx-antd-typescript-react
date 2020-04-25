import React, { lazy, Suspense } from "react";
import { Route, Router, Switch } from "react-router";
import { history } from "./history";
const Index = lazy(() => import("./pages/index"));
const App: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Suspense fallback={null}>
          <Route path="/" exact component={Index} />
        </Suspense>
      </Switch>
    </Router>
  );
};

export default App;
