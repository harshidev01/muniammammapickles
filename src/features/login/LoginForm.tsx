/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import Checkbox from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginFormInterface {
  handleLoginSubmit: (e: any) => void;
  loginStep: number;
  register:any;
  handleSubmit:any;
  formState:any
  watch:any
}

function LoginForm({ handleLoginSubmit, loginStep,formState,handleSubmit,register, watch}: LoginFormInterface) {
  const navigate = useNavigate();
  const { errors } = formState;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form onSubmit={handleSubmit(handleLoginSubmit)}>
      {loginStep === 0 ? (
        <div className="space-y-4">
          <Input
            mandatory
            label="Email address"
            placeholder="Email address"
            errorMessage={errors?.emailId?.message}
            {...register("emailId", {
              required: "Please enter Email address",
            })}
          />
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
        </div>
      ) : (
        <div>
          <Input
          value={watch("")??""}
            label="OTP"
            placeholder="OTP"
            errorMessage={errors?.otp?.message}
            {...register("otp", {
              required: "Please enter OTP",
            })}
          />
        </div>
      )}
      <div className="mt-3 flex justify-between px-2">
        <Checkbox label="Remember me" checked={true} onChange={() => {}} />
        <p className=" font-medium text-blue-700 cursor-pointer" onClick={()=>{
          navigate("/forgot-password")
        }}>
          Forgot password?
        </p>
      </div>
      <div className="w-full mt-5">
        <Button className="w-full ">Login now</Button>
      </div>
      <div className="mt-3 flex justify-start px-2">
        <p className="">
          Don't have an account?&nbsp;
          <Button
            onClick={() => {
              navigate("/signup");
            }}
            type="button"
            className="text-xs px-1 "
            variant={"link"}
          >
            Create account now
          </Button>
        </p>
      </div>
    </form>
  );
}

export default LoginForm;
