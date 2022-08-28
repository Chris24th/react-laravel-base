import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Verification from "./pages/Verification";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";

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
  {
    url: "/profile",
    page: <Profile />,
  },
  {
    url: "/forgotpassword",
    page: <ForgotPassword />,
  },
];

export default routes;
