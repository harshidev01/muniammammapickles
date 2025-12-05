/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import InterPhoneInput from "@/components/ui/phone-input";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useSignUp } from "@/hooks/auth/signUpHooks";
import AppSpinner from "@/apputils/AppSpinner";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { LuAsterisk } from "react-icons/lu";
import PageWrapper from "@/apputils/PageWrapper";
import NavBar from "@/apputils/NavBar";
import Footer from "@/apputils/Footer";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  agree: boolean;
  otp?: string;
  googleSignUp?: boolean;
  profileUrl?: string;
};

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const { signUp, isPending } = useSignUp();
  const [signUpStep, setSignUpStep] = useState<number>(0);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  function onSubmit(data: FormData) {
    signUp(
      {
        emailId: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        mobileNumber: data.phone,
        password: data.password,
        otp: data?.otp ? parseInt(data?.otp) : undefined,
        googleSignUp: data?.googleSignUp,
        profileUrl: data?.profileUrl,
      },
      {
        onSuccess: (data) => {
          if (data?.data === "OTP_SENT") {
            setSignUpStep(1);
          } else if (data?.data === "SUCCESS") {
            navigate("/login");
          } else if (data?.data === "USER_EXISTS") {
            setTimeout(() => {
              navigate("/login", {
                state: {
                  data: "USER_EXISTS",
                },
              });
            }, 1000);
          }
        },
      }
    );
  }

  function handleBackClick() {
    setSignUpStep(0);
  }

  function handleGoogleSignInSuccess(response: any) {
    const googleAuthResponse: any = jwtDecode(response?.credential);

    onSubmit({
      email: googleAuthResponse?.email,
      firstName: googleAuthResponse?.name,
      googleSignUp: true,
      profileUrl: googleAuthResponse?.picture,
    } as any);
  }

  return (
    <PageWrapper>
      <div className="flex flex-col ">
        <div className="flex flex-col lg:h-[95vh]  ">
          <NavBar />
          <div className=" flex  bg-background  items-center ">
            {<AppSpinner isPending={isPending} />}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full max-w-md mx-auto   p-10 space-y-4"
            >
              <div className="text-center">
                <h2 className="text-3xl ">Create Your Account</h2>
                <p className="text-muted-foreground  mt-1">Freegrow Nextgen</p>
              </div>
              {signUpStep === 0 ? (
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col lg:flex-row gap-4">
                    <div className="w-full">
                      <Input
                        mandatory
                        label="First name"
                        errorMessage={errors?.firstName?.message}
                        placeholder="First name"
                        {...register("firstName", {
                          required: "Please enter First Name",
                        })}
                      />
                    </div>
                    <div className="w-full">
                      <Input
                        label="Last name"
                        errorMessage={errors.lastName?.message}
                        placeholder="Last name"
                        {...register("lastName", { required: false })}
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      mandatory
                      label="Email Address"
                      errorMessage={errors.email?.message}
                      placeholder="Enter your email"
                      {...register("email", {
                        required: "Please enter Email Address",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid Email Adress format",
                        },
                      })}
                    />
                  </div>
                  <div className="flex  gap-1 flex-col h-16">
                    <label className="flex items-center  font-medium mb-1">
                      Phone Number{" "}
                      <span className="w-3 h-3">
                        <LuAsterisk className="w-3  h-3  text-destructive" />
                      </span>
                    </label>
                    <InterPhoneInput
                      {...register("phone", {
                        required: false,
                      })}
                    />
                    <p className="  text-destructive">
                      {<label className="">{errors?.phone?.message}</label>}
                    </p>
                  </div>
                  <div>
                    <div className="relative ">
                      <Input
                        label="Password"
                        mandatory
                        errorMessage={errors.password?.message}
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="pr-10 w-full"
                        {...register("password", {
                          required: "Please enter Password",
                          pattern: {
                            value:
                              /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,}$/,
                            message:
                              "Password must be at least 8 characters, include an uppercase letter, a number, and a special character",
                          },
                        })}
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-2 top-[39px] -translate-y-1/2 text-muted-foreground"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="flex  gap-1 flex-col h-20 pt-4">
                    <label className="flex items-start gap-2 text-muted-foreground cursor-pointer">
                      <input
                        type="checkbox"
                        {...register("agree", {
                          required:
                            "You must accept FreeGrow’s Terms of Use and Privacy Policy to continue.",
                          validate: (v) =>
                            v === true ||
                            "You must accept FreeGrow’s Terms of Use and Privacy Policy to continue.",
                        })}
                        className="mt-1 cursor-pointer accent-primary"
                      />
                      <span className="text-sm leading-relaxed">
                        I have read and agree to FreeGrow’s{" "}
                        <a
                          href="/terms"
                          target="_blank"
                          className="text-primary hover:underline font-medium"
                        >
                          Terms of Use
                        </a>{" "}
                        and{" "}
                        <a
                          href="/privacy-policy"
                          target="_blank"
                          className="text-primary hover:underline font-medium"
                        >
                          Privacy Policy
                        </a>
                        .
                      </span>
                    </label>

                    <p className="  text-destructive">
                      {<label className="">{errors?.agree?.message}</label>}
                    </p>
                  </div>
                  <div className="flex items-center justify-center w-full ">
                    <GoogleLogin
                      width={300}
                      onSuccess={handleGoogleSignInSuccess}
                      onError={() => {
                        console.log("Login Failed");
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="py-4">
                  <Input
                    label="OTP"
                    errorMessage={errors.email?.message}
                    placeholder="Enter OTP"
                    {...register("otp", {
                      required: "Please enter OTP",
                    })}
                  />
                </div>
              )}

              <div className="w-full flex gap-4 items-center justify-center ">
                {signUpStep === 1 && (
                  <Button
                    onClick={handleBackClick}
                    type="button"
                    className="px-10 w-fit"
                    variant={"outline"}
                  >
                    <MdArrowBackIosNew className="w-5 h-5" /> Back
                  </Button>
                )}
                <Button
                  disabled={watch("agree") !== true}
                  type="submit"
                  className="px-10 w-fit"
                  variant={"constructive"}
                >
                  Create account
                </Button>
              </div>
              <p className="text-center  text-muted-foreground">
                Already have an account?{" "}
                <a href="/login" className="text-primary underline font-medium">
                  Log in
                </a>
              </p>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </PageWrapper>
  );
}

export default SignUp;
