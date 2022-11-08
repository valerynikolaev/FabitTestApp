import CssBaseline from "@mui/material/CssBaseline";

import Paper from "@mui/material/Paper";

import Grid from "@mui/material/Grid";

import SplashImg from "./images/login-splash.jpg";
import { observer } from "mobx-react-lite";

import { Outlet } from "react-router-dom";

const AuthPage = () => {
  console.log("Auth page render");
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={8}
        lg={8}
        xl={9}
        sx={{
          backgroundImage: `url(${SplashImg})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={4}
        lg={4}
        xl={3}
        component={Paper}
        elevation={6}
        square
        // sx={{ backgroundColor: "#afedc8" }}
      >
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default observer(AuthPage);
