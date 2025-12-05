import { postAPI } from "@/apiServices";

export function forgotPasswordAPI(emailId: string) {
  return postAPI("auth/forgotpassword", {
    emailId,
  });
}
