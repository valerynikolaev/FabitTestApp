import { action, makeObservable, observable } from "mobx";
import React from "react";
import { postLogin, postRegistration } from "./api";
import {
  FetchOperationModel,
  FetchResponseStatus,
  LoginResultModel,
  RegistrationFormModel
} from "./types";

class AuthStore {
  constructor() {
    makeObservable(this);
  }

  @observable
  registrationFetchOperation = {} as FetchOperationModel;

  @observable
  isLoginFetching = false;

  @observable
  isLoginFailed = false;

  @observable
  loginError = "";

  login = async (username: string, password: string): Promise<boolean> => {
    this.isLoginFetching = true;
    const loginResult = await postLogin({
      username,
      password,
      remember: false
    });
    this.isLoginFetching = false;

    this.isLoginFailed = !loginResult.success;
    this.loginError = loginResult.cause || "";

    if (loginResult.success && loginResult.accessToken) {
      localStorage.setItem("token", loginResult.accessToken);
      localStorage.setItem("userId", String(loginResult.userId));
    }

    return loginResult.success || false;
  };

  register = async (model: RegistrationFormModel): Promise<boolean> => {
    this.registrationFetchOperation.isFetching = true;
    const result = await postRegistration(model);
    console.log({ registerResult: result });
    this.registrationFetchOperation.isFetching = false;
    this.registrationFetchOperation.responseStatus = result.success
      ? FetchResponseStatus.Ok
      : FetchResponseStatus.Fail;
    this.registrationFetchOperation.errorText = result.cause;

    return result.success;
  };
}

export const authStore = new AuthStore();
