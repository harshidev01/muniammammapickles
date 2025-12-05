/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosRefresh, IoIosText } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { useEffect, useState } from "react";
import NavBar from "@/apputils/NavBar";
import Footer from "@/apputils/Footer";
import { Button } from "@/components/ui/button";

function ContactUsMain() {
  const { register, handleSubmit, formState, setError, reset } = useForm();
  const { errors, isSubmitting } = formState;
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        setSuccessMessage("");
      }, 1000);
    }
  }, [successMessage]);

  async function handleSubmitClick(e: any) {
    const url = "https://freeemailapi.vercel.app/sendEmail/";

    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        toEmail: "harshithavenkat017@gmail.com",
        subject: "New Contact Request — Muniammammapickles",
        title: "New Message Received",

        body: `
   <div style="font-family: 'Segoe UI', Helvetica, Arial, sans-serif; max-width: 600px; margin: auto; background-color: #ffffff; padding: 32px; border-radius: 10px; border: 1px solid #e5e7eb;">
  <h2 style="font-size: 24px; color: #111827; margin-bottom: 8px;">
    👋 New Message from Muniammammapickles
  </h2>
  <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />

  <p style="font-size: 16px; color: #374151; margin-bottom: 24px;">
    Hello team,<br /><br />
    You've received a new inquiry via the contact form. Here are the details:
  </p>

  <table style="font-size: 15px; color: #111827; width: 100%; margin-bottom: 24px;">
    <tr>
      <td style="padding: 8px 0; font-weight: 600;">Name:</td>
      <td>${e?.name}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; font-weight: 600;">Email:</td>
      <td>${e?.email}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; font-weight: 600;">Phone:</td>
      <td>${e?.phone}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; font-weight: 600;">Message:</td>
      <td style="white-space: pre-wrap;">${e?.message}</td>
    </tr>
  </table>

  <a href="mailto:${e?.email}" style="display: inline-block; padding: 12px 24px; background-color: #4f46e5; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px;">
    📩 Reply to ${e?.name}
  </a>

  <p style="margin-top: 32px; font-size: 13px; color: #9ca3af; text-align: center;">
    Sent with ❤️ by Muniammammapickles
  </p>
</div>

  `,
      }),
    });
    const result = await response.json();

    if (result?.message === "wrongEmail") {
      setError("email", {
        type: "manual",
        message: "Wrogng Email",
      });
    } else if (result?.message === "emailSendSuccess") {
      setSuccessMessage("Your form submitted successfully😊");
      reset();
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <NavBar />
      <div className="relative flex items-center mt-[7vh] justify-center w-full h-full">
        <div className="absolute mt-10 text-4xl lg:text-[70px]  font-semibold text-center">
          <div>Contact Us</div>
        </div>
      </div>
      <div className="px-8 mt-[15vh] w-full  justify-center flex flex-col lg:flex-row">
        <div className="flex flex-col gap-7 mt-[3vh] items-center">
          <div className="text-xl font-semibold lg:max-w-[35vw]">
            Get in Touch with Muniammammapickles 👋
          </div>
          <p className="lg:max-w-[30vw] lg:text-xs">
            Have a question about your order, our homemade pickles, or anything
            else? We’re here for you! Reach out to Muniammammapickles and our
            friendly support team will get back to you as quickly as possible.
            Whether it's a concern, suggestion, or a friendly hello — we’re
            always ready to help. Drop us a message, and we’ll take care of the
            rest 🍀.
          </p>
          <img src="final.png" className="h-32 w-32" />
        </div>

        <div className="mt-[4vh] lg:mt-0">
          <div className=" min-w-[22vw] rounded-sm min-h-[50vh] relative mb-[10vh] p-6">
            <div className="text-2xl font-semibold mb-3">Drop Us a Message</div>

            <form
              className="flex flex-col gap-10 mt-[5vh] "
              onSubmit={handleSubmit(handleSubmitClick)}
            >
              <div className="w-full relative flex  gap-1 h-6  flex-col ">
                <FaUser className=" absolute top-1" />
                <input
                  className="w-full outline-none bg-transparent border-b pl-6 "
                  placeholder="Name*"
                  {...register("name", {
                    required: "Please Enter Name",
                  })}
                />
                {errors?.name?.message && (
                  <div className="text-red-400 text-xs ">
                    {errors?.name?.message as any}{" "}
                  </div>
                )}
              </div>

              <div className="w-full relative flex  gap-1 h-6  flex-col ">
                <MdPhoneInTalk className=" absolute top-1" />
                <input
                  className="w-full outline-none bg-transparent border-b pl-6 "
                  placeholder="Phone no*"
                  {...register("phone", {
                    required: "Please Enter Phone No",
                  })}
                />
                {errors?.phone?.message && (
                  <div className="text-red-400 text-xs">
                    {errors?.phone?.message as any}{" "}
                  </div>
                )}
              </div>
              <div className="w-full relative flex  gap-1 h-6  flex-col ">
                <AiOutlineMail className=" absolute top-1" />
                <input
                  className="w-full outline-none bg-transparent border-b pl-6 "
                  placeholder="Email Id*"
                  {...register("email", {
                    required: "Please Enter Email Id",
                    pattern: /^[a-z0-9][\w\.]+\@\w+?(\.\w+){1,}$/gi,
                  })}
                />
                {errors?.email?.message && (
                  <div className="text-red-400 text-xs">
                    {errors?.email?.message as any}{" "}
                  </div>
                )}
              </div>
              <div className="w-full relative flex  gap-1   flex-col h-20 ">
                <IoIosText className=" absolute top-1" />
                <textarea
                  className="w-full outline-none bg-transparent border-b pl-6 h-14 resize-none "
                  placeholder="Message *"
                  {...register("message", {
                    required: "Please Enter Message",
                  })}
                />
                {errors?.message?.message && (
                  <div className="text-red-400 text-xs">
                    {errors?.message?.message as any}{" "}
                  </div>
                )}
              </div>
              <Button disabled={isSubmitting}>
                Connect Today{" "}
                {isSubmitting ? (
                  <IoIosRefresh className="animate-spin" />
                ) : (
                  <IoSend />
                )}
              </Button>
              {successMessage && (
                <div className="text-xs text-constructive -mt-6">
                  {successMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="mb-[3vh]">
        <Footer />
      </div>
    </div>
  );
}

export default ContactUsMain;
