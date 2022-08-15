import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {routes &&
            routes.map((route) => (
              <Route
                key={routes}
                exact
                path={route.url.toString()}
                element={route.page}
              />
            ))}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
