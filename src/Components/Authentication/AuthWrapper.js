import { styled } from "@mui/material/styles";
import Background from "../Assets/images/background.jpg";

// ==============================|| AUTHENTICATION WRAPPER ||============================== //

const AuthWrapper = styled("div")(() => ({
  position: "relative",
  minHeight: "100vh",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: `url(${Background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: -1,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
  },
}));

export default AuthWrapper;
