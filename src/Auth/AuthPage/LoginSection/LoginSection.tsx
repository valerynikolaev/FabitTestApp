import LocalFloristOutlinedIcon from "@mui/icons-material/LocalFloristOutlined";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import LoginForm from "./LoginForm/LoginForm";
import { RegistrationFormModel } from "../../types";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginSection = () => {
  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Avatar
        sx={{
          m: 1,
          mb: 6,
          width: 100,
          height: 100,
          bgcolor: "primary.main"
        }}
      >
        <LocalFloristOutlinedIcon sx={{ width: 70, height: 70 }} />
      </Avatar>
      <Typography component="h1" variant="h5">
        Добро пожаловать
      </Typography>
      {/* <LoginForm /> */}
      <LoginForm />
      <Grid container>
        <Grid item>
          <Link to="/auth/register">
            <Typography color={"primary.main"} variant="body2">
              {"Зарегистрироваться"}
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginSection;
