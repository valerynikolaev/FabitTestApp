import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import { Link } from "react-router-dom";

const RegistrationSection = () => {
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
        <HowToRegOutlinedIcon sx={{ width: 70, height: 70 }} />
      </Avatar>
      <Typography component="h1" variant="h5">
        Регистрация
      </Typography>
      <RegistrationForm />
      <Grid container>
        <Grid item>
          <Link to="/auth/login">
            <Typography color={"primary.main"} variant="body2">
              {"Уже зарегистрированы?"}
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegistrationSection;
