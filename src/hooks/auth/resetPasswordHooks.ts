import { useHandleApiResponse } from "@/apiServices";
import { useToast } from "@/components/ui/use-toast";
import { resetPasswordAPI } from "@/servcies/auth/resetPassword";
import { useMutation } from "@tanstack/react-query";

export function useResetPassword() {
  const { handleToast } = useHandleApiResponse();
  const { toast } = useToast();


  const {
    data,
    isPending,
    mutate: resetPassword,
  } = useMutation({
    mutationFn: (data: { password: string; token: string }) =>
      resetPasswordAPI(data),
    onSuccess(data) {
        if (data?.data !== "SUCCESS") {
            handleToast(data.data);
          }
          else{
            toast({
              title: "Your password has been reset successfully.",
              variant:"constructive"
            });
    
          }
    },
  });

  return { data, isPending, resetPassword };
}
