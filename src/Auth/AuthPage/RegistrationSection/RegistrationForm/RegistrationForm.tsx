import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FetchResponseStatus, RegistrationFormModel } from "../../../types";
import { useForm } from "react-hook-form";
import { authStore } from "../../../AuthStore";
import { Paper } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const {
    registrationFetchOperation: { isFetching, responseStatus, errorText },
    register: registerUser
  } = authStore;

  const { register, handleSubmit, formState } =
    useForm<RegistrationFormModel>();
  const onSubmit = async (model: RegistrationFormModel) => {
    console.log({ model, formState });
    const result = await registerUser(model);
    console.log({ result });
    if (result) {
      navigate("/auth/login");
    }
  };
  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      sx={{ mt: 1 }}
    >
      <TextField
        margin="normal"
        fullWidth
        error={Boolean(formState.errors["name"])}
        id="name"
        label="Имя пользователя"
        autoComplete="name"
        autoFocus
        {...register("name", { required: true })}
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
      <TextField
        margin="normal"
        fullWidth
        error={Boolean(formState.errors["telegramNickName"])}
        id="telegramNickName"
        label="Имя в телеграм (@)"
        autoComplete="telegramNickName"
        autoFocus
        {...register("telegramNickName", { required: true })}
      />
      <TextField
        margin="normal"
        fullWidth
        error={Boolean(formState.errors["email"])}
        id="email"
        label="E-mail"
        autoComplete="email"
        autoFocus
        {...register("email", { required: true })}
      />
      {responseStatus === FetchResponseStatus.Fail && (
        <Paper elevation={3} sx={{ backgroundColor: "#f28b82", p: 1 }}>
          {errorText || "Ошибка регистрации. Попробуйте позже"}
        </Paper>
      )}
      <LoadingButton
        type="submit"
        loading={isFetching}
        loadingPosition="start"
        startIcon={<LoginOutlinedIcon />}
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        fullWidth
      >
        Регистрация
      </LoadingButton>
    </Box>
  );
};

export default RegistrationForm;
