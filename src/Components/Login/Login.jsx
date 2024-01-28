/* eslint-disable no-unused-vars */

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import AuthWrapper from "../Authentication/AuthWrapper";
import Logo from "../Assets/images/logo-ge.png";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="">
        GE
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function SignIn() {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup"); // Specify the path to your SignUp page
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <AuthWrapper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          marginTop="150px"
          p={5}
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
            border: "1px solid #000",
            padding: "20px",
          }}
        >
          <Avatar src={Logo} alt="" sx={{ m: 1 }} />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
            <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Stack direction="row" justifyContent="center">
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Stack>
          </Box>
          <Copyright sx={{ mt: 4, mb: 2 }} />
        </Stack>
      </Box>
    </AuthWrapper>
  );
}

export default SignIn;
