import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { authStore } from "../../../AuthStore";
import { useForm } from "react-hook-form";
import { LoginFormModel } from "../../../types";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { observer } from "mobx-react-lite";
const LoginForm = () => {
  console.log("LoginForm render");
  const { isLoginFailed, isLoginFetching, login, loginError } = authStore;
  const { register, handleSubmit, formState } = useForm<LoginFormModel>();

  const onError = (e: any) => {
    console.log(formState.errors);
  };

  const onSubmit = async (model: LoginFormModel) => {
    console.log({ model, formState });
    await login(model.username, model.password);
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit, onError)}
      sx={{ mt: 1 }}
    >
      <TextField
        margin="normal"
        fullWidth
        error={Boolean(formState.errors["username"])}
        id="username"
        label="Логин"
        autoComplete="username"
        autoFocus
        {...register("username", { required: true })}
      />
      <TextField
        margin="normal"
        fullWidth
        error={Boolean(formState.errors["password"])}
        label="Пароль"
        type="password"
        id="password"
        autoComplete="current-password"
        {...register("password", { required: true })}
      />
      <FormControlLabel
        control={<Checkbox id="remember" name="remember" color="primary" />}
        label="Запомнить меня"
      />
      {isLoginFailed && (
        <Paper elevation={3} sx={{ backgroundColor: "#f28b82", p: 1 }}>
          {loginError}
        </Paper>
      )}
      <LoadingButton
        type="submit"
        loading={isLoginFetching}
        loadingPosition="start"
        startIcon={<LoginOutlinedIcon />}
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        fullWidth
      >
        Войти
      </LoadingButton>
    </Box>
  );
};

export default observer(LoginForm);
