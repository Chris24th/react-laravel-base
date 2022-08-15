import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Verification from "./pages/Verification";

const routes = [
  {
    url: "/",
    page: <Home />,
  },
  {
    url: "/signup",
    page: <SignUp />,
  },
  {
    url: "/signin",
    page: <SignIn />,
  },
  {
    url: "/verification",
    page: <Verification />,
  },
];

export default routes;
