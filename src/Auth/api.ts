import appSettings from "../appSettings";
import {
  LoginFormModel,
  LoginResultModel,
  RegistrationFormModel,
  RegistrationResult
} from "./types";

const loginUrl = `${appSettings.baseUrl}/api/Users/LoginUser`;
const registrationUrl = `${appSettings.baseUrl}/api/Users/CreateUser`;

export const postLogin = async (
  model: LoginFormModel
): Promise<LoginResultModel> => {
  const res = await fetch(loginUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json"
    },
    body: JSON.stringify(model)
  });
  return await res.json();
};

export const postRegistration = async (
  model: RegistrationFormModel
): Promise<RegistrationResult> => {
  const res = await fetch(registrationUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json"
    },
    body: JSON.stringify(model)
  });
  return await res.json();
};
