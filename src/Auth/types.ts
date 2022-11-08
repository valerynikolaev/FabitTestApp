export interface LoginFormModel {
  username: string;
  password: string;
  remember: boolean;
}

export interface LoginResultModel {
  success?: boolean;
  cause?: string;
  accessToken?: string;
  userId?: number;
}

export interface RegistrationFormModel {
  name?: string;
  password?: string;
  telegramNickName?: string;
  email?: string;
}

export interface FetchOperationModel {
  isFetching: boolean;
  responseStatus: FetchResponseStatus;
  errorText?: string;
}

export interface BaseFetchOperationResult {
  success: boolean;
  cause: string;
}

export interface RegistrationResult extends BaseFetchOperationResult {
  userId: number;
}

export enum FetchResponseStatus {
  Ok,
  Fail,
  Unknown
}
