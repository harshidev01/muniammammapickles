/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useGetEmailId, useGetName } from "@/apputils/AppHooks";
import {
  useGetUserDetails,
  useUpdateAdress,
  useUpdateProfile,
} from "@/hooks/user/userHooks";
import AppSpinner from "@/apputils/AppSpinner";
import { useAppContext } from "@/apputils/AppContext";

export default function ProfileMain() {
  const emailId = useGetEmailId();
  const name = useGetName();
  const [tab, setTab] = useState("personal");
  const { refresh } = useAppContext();
  const { register, handleSubmit, formState, setValue } = useForm({
    defaultValues: {
      name,
      emailId,
      phone: "",
      ad1: "",
      ad2: "",
      bio: "",
      city: "",
      state: "",
      pincode: "",
      country: "India",
    },
  });
  const { errors } = formState;
  const { isPending, updateProfile } = useUpdateProfile();
  const { isPending: gettingUseDetails, getUserDetails } = useGetUserDetails();
  const { isPending: updatingAddress, updateAddress } = useUpdateAdress();
  useEffect(() => {
    getUserDetails(
      {
        emailId,
      },
      {
        onSuccess(data) {
          if (data?.user) {
            const user = data?.user;
            const userAd = data?.user?.address;
            setValue("name", user?.firstName);
            setValue("phone", user?.mobileNumber);
            setValue("bio", user?.bio);
            setValue("ad1", userAd?.addressLine1);
            setValue("ad2", userAd?.addressLine2);
            setValue("city", userAd?.city);
            setValue("state", userAd?.state);
            setValue("pincode", userAd?.pincode);
            setValue("country", userAd?.country);
          }
        },
      }
    );
  }, [refresh]);

  function handleSaveClick(e: any) {
    if (tab === "personal") {
      updateProfile({
        emailId,
        name: e?.name,
        bio: e?.bio ? e?.bio : "",
        phoneNumber: e?.phone,
      });
    } else {
      updateAddress({
        emailId,
        addressLine1: e?.ad1,
        addressLine2: e?.ad2 || "",
        city: e?.city,
        state: e?.state,
        pincode: e?.pincode,
        country: e?.country || "India",
      });
    }
  }

  return (
    <div className="lg:w-[30vw] mx-auto lg:p-6 space-y-8 flex flex-col">
      {
        <AppSpinner
          isPending={isPending || gettingUseDetails || updatingAddress}
        />
      }

      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-4xl font-extrabold">My Profile</h1>
          <p className="text-gray-500 text-sm">
            Manage your personal details and address
          </p>
        </div>
      </div>

      <Tabs value={tab} onValueChange={setTab} className="w-full">
        <TabsList className="flex justify-start gap-2 mb-6 w-full">
          <TabsTrigger
            className="data-[state=active]:bg-primary data-[state=active]:text-background border  text-foreground"
            value="personal"
          >
            Personal Info
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-primary data-[state=active]:text-background text-foreground"
            value="address"
          >
            Address
          </TabsTrigger>
        </TabsList>

        <TabsContent value="personal">
          <Card className="border-none  shadow-none">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Update your personal information
              </CardDescription>
            </CardHeader>
            {tab === "personal" && (
              <CardContent>
                <form
                  onSubmit={handleSubmit(handleSaveClick)}
                  className="grid  grid-cols-1 md:grid-cols-2 gap-6 "
                >
                  <div>
                    <Input
                      mandatory
                      {...register("name", {
                        required: "Please enter your Full name",
                      })}
                      errorMessage={errors?.name?.message}
                      label="name"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Input
                      disabled={true}
                      mandatory
                      {...register("emailId", {
                        required: false,
                      })}
                      errorMessage={errors?.emailId?.message}
                      label="Email id"
                      type="email"
                      placeholder="example@email.com"
                    />
                  </div>
                  <div>
                    <Input
                      mandatory
                      {...register("phone", {
                        required: "Please enter your Phone number",
                      })}
                      errorMessage={errors?.phone?.message}
                      type="number"
                      label="Phone number"
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Textarea
                      {...register("bio", {
                        required: false,
                      })}
                      label="bio"
                      placeholder="Tell us about yourself..."
                    />
                  </div>

                  <div className="mt-10">
                    <Button className="w-fit">Save changes</Button>
                  </div>
                </form>
              </CardContent>
            )}
          </Card>
        </TabsContent>

        <TabsContent value="address">
          <Card className="shadow-none border-none">
            <CardHeader>
              <CardTitle>Address Details</CardTitle>
              <CardDescription>
                Provide your address information
              </CardDescription>
            </CardHeader>
            {tab === "address" && (
              <CardContent>
                <form
                  onSubmit={handleSubmit(handleSaveClick)}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div>
                    <Input
                      mandatory
                      {...register("ad1", {
                        required: "Please enter your Address Line 1",
                      })}
                      errorMessage={errors?.ad1?.message}
                      label="Address Line 1"
                      placeholder="e.g. 123 MG Road, Near Axis Bank"
                    />
                  </div>
                  <div>
                    <Input
                      {...register("ad2")}
                      label="Address Line 2"
                      placeholder="e.g. 2nd Floor, Flat No. 204 (optional)"
                    />
                  </div>
                  <div>
                    <Input
                      mandatory
                      {...register("city", {
                        required: "Please enter your City",
                      })}
                      errorMessage={errors?.city?.message}
                      label="City"
                      placeholder="e.g. Bengaluru"
                    />
                  </div>
                  <div>
                    <Input
                      mandatory
                      {...register("state", {
                        required: "Please enter your State",
                      })}
                      errorMessage={errors?.state?.message}
                      label="State"
                      placeholder="e.g. Karnataka"
                    />
                  </div>
                  <div>
                    <Input
                      mandatory
                      {...register("pincode", {
                        required: "Please enter your Pincode",
                      })}
                      errorMessage={errors?.pincode?.message}
                      label="Pincode"
                      type="number"
                      placeholder="e.g. 560001"
                    />
                  </div>
                  <div>
                    <Input
                      mandatory
                      {...register("country", {
                        required: false,
                      })}
                      errorMessage={errors?.country?.message}
                      label="Country"
                      placeholder="e.g. India"
                      disabled={true}
                    />
                  </div>
                  <div className="mt-10">
                    <Button className="w-fit">Save changes</Button>
                  </div>
                </form>
              </CardContent>
            )}
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
