import { useHandleApiResponse } from "@/apiServices";
import { signUpAPI } from "@/servcies/auth/signUpApis";
import type { signUpRequestType } from "@/types/auth/signUpDataTypes";

import { useMutation } from "@tanstack/react-query";

export function useSignUp() {
    const {handleToast} = useHandleApiResponse()
  const {
    data,
    isPending,
    mutate: signUp,
  } = useMutation({
    mutationFn: (data: signUpRequestType) => signUpAPI(data),
    onSuccess(data) {
        handleToast(data.data)
    }

});

  return { data, isPending, signUp };
}
