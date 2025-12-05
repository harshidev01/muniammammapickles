import { postAPI } from "@/apiServices";
import type { signUpRequestType } from "@/types/auth/signUpDataTypes";

export function signUpAPI(data: signUpRequestType) {
  return postAPI("auth/signup", data);
}
