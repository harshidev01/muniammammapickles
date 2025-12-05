/* eslint-disable @typescript-eslint/no-explicit-any */
import AppDialog from "@/apputils/AppDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { IoAddSharp } from "react-icons/io5";
import { LuAsterisk } from "react-icons/lu";

interface AddUserInterface {
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

function AddUser({ setOpenDialog }: AddUserInterface) {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;


  function addUser(e: any) {
    console.log(e);
  }

  return (
    <div>
      <AppDialog
        placement="CENTER"
        title="Add User"
        onClose={() => {
          setOpenDialog(false);
        }}
      >
        <form
          onSubmit={handleSubmit(addUser)}
          className="w-[20vw]  flex flex-col gap-8 "
        >
          <div className="h-16 w-full">
            <label className=" font-medium mb-1 flex items-center ">
              {"Select role"}
              <span className="w-3 h-3">
                <LuAsterisk className="w-3  h-3  text-destructive" />
              </span>
            </label>
            <Select
              {...register("role", {
                required: "Please select Role",
              })}
            >
              <SelectTrigger className="w-full h-12">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="ADMIN">Admin</SelectItem>
                  <SelectItem value="SUPER_ADMIN">Super Admin</SelectItem>
                  <SelectItem value="SUPPORT">Support</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <p className="text-destructive">
              {<label className="">{errors?.role?.message as string}</label>}
            </p>
          </div>
          <div>
            <Input
              {...register("fullName", {
                required: "Please enter Full name",
              })}
              placeholder="Enter text.."
              label="Full name"
              className="h-12"
              mandatory={true}
              errorMessage={errors?.fullName?.message}
            />
          </div>

          <div>
            <Input
              {...register("emailId", {
                required: "Please enter Email id",
              })}
              placeholder="Enter text.."
              label="Email id"
              className="h-12"
              mandatory={true}
              errorMessage={errors?.emailId?.message}
            />
          </div>

          <div>
            <Input
              {...register("password", {
                required: "Please enter Password",
              })}
              placeholder="Enter text.."
              label="Password"
              className="h-12"
              mandatory={true}
              errorMessage={errors?.password?.message}
            />
          </div>
          <div className="flex gap-2">
            <Button
              className="w-1/2 flex items-center gap-1"
              variant={"ghost"}
              onClick={() => {
                setOpenDialog(false);
              }}
            >
              <X className="w-5 h-5" /> Close
            </Button>
            <Button
              className="w-1/2 flex items-center gap-1"
              variant={"constructive"}
            >
              <IoAddSharp className="w-10 h-10" /> Add User
            </Button>
          </div>
        </form>
      </AppDialog>
    </div>
  );
}

export default AddUser;
