import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import Navbar from "react-bootstrap/Navbar";

const App = () => {
  return (
    <div>
      <Navbar bg="dark"></Navbar>
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
