import { postAPI } from "@/apiServices";

export function resetPasswordAPI(data: { token: string; password: string }) {
  return postAPI("auth/resetpassword", data);
}
