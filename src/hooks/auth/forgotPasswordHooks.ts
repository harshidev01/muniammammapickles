import { useHandleApiResponse } from "@/apiServices";
import { useToast } from "@/components/ui/use-toast";
import { forgotPasswordAPI } from "@/servcies/auth/forgotPassword";
import { useMutation } from "@tanstack/react-query";

export function useForogotPassword() {
  const { handleToast } = useHandleApiResponse();
  const { toast } = useToast();

  const {
    data,
    isPending,
    mutate: forgotPassword,
  } = useMutation({
    mutationFn: ({ emailId }: { emailId: string }) =>
      forgotPasswordAPI(emailId),
    onSuccess(data) {
      if (data?.data !== "SUCCESS") {
        handleToast(data.data);
      }
      else{
        toast({
          title: "We’ve sent a password reset link to your email address. Please check your inbox and follow the instructions to reset your password.",
          variant:"constructive"
        });

      }
    },
  });

  return { data, isPending, forgotPassword };
}
