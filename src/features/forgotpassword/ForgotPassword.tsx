/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useForogotPassword } from "@/hooks/auth/forgotPasswordHooks";
import PageWrapper from "@/apputils/PageWrapper";
import AppSpinner from "@/apputils/AppSpinner";
import NavBar from "@/apputils/NavBar";
import Footer from "@/apputils/Footer";

function ForgotPassword() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm();
  const { isPending, forgotPassword } = useForogotPassword();

  function onSubmit(data: any) {
    forgotPassword({
      emailId:data?.email
    },{
      onSuccess(data) {
        if(data?.data === "SUCCESS"){
          reset()

        }
      },
    })
  }

  return (
    <PageWrapper>
      <AppSpinner isPending={isPending} />
      <div className="flex flex-col ">
        <div className="flex flex-col h-[95vh]">
          <NavBar />
          <div className="flex flex-col items-center justify-center h-full w-full">
            <div className=" mx-auto mt-20 px-6 py-10 bg-white ">
              <h2 className="text-3xl font-bold text-center text-blue-950 mb-4">
                Forgot Password?
              </h2>
              <p className="text-sm text-gray-600 text-center mb-6">
                Enter your email to receive a password reset link.
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <Input
                  label="Email"
                  type="email"
                  placeholder="Enter your Email"
                  errorMessage={errors.email?.message}
                  {...register("email", {
                    required: "Please enter Email",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  Send Reset Link
                </Button>
              </form>
              <p className="text-sm mt-6 text-center text-gray-700">
                Remember your password?{" "}
                <span
                  onClick={() => navigate("/login")}
                  className="text-blue-700 font-semibold cursor-pointer hover:underline"
                >
                  Login here
                </span>
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </PageWrapper >
  );
}

export default ForgotPassword;
