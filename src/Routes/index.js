import SignIn from "../Components/Login/Login";
import SignUp from "../Components/Signup/Signup";

const Routes = [
  {
    path: "/login",
    name: "Login",
    component: <SignIn />,
  },
  {
    path: "/signUp",
    name: "SignUp",
    component: <SignUp />,
  },
];

export default Routes;
