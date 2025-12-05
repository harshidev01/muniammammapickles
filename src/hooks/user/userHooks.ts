/* eslint-disable @typescript-eslint/no-explicit-any */
import { useHandleApiResponse } from "@/apiServices";
import { useAppContext } from "@/apputils/AppContext";
import {
  createOrderAPI,
  getUserDetailsAPI,
  updateAddressAPI,
  updateProfileAPI,
  verifyOrderAPI,
} from "@/servcies/user/userApis";
import { useMutation } from "@tanstack/react-query";

export function useCreateOrder() {
  const { handleToast } = useHandleApiResponse();
  const {
    data,
    isPending,
    mutate: createOrder,
  } = useMutation({
    mutationFn: (data: { emailId: string; amount: number }) =>
      createOrderAPI(data),
    onSuccess(data) {
      if (data?.data !== "SUCCESS") {
        handleToast(data.data);
      }
    },
  });

  return { data, isPending, createOrder };
}
export function useVerifyOrder() {
  const { handleToast } = useHandleApiResponse();
  const {
    data,
    isPending,
    mutate: verifyOrder,
  } = useMutation({
    mutationFn: (data: {
      razorpayOrderId: string;
      razorpayPaymentId: string;
      razorpaySignature: string;
    }) => verifyOrderAPI(data),
    onSuccess(data) {
      if (data?.data === "SUCCESS") {
        handleToast("VALID_PAYMENT");
        localStorage.removeItem("mapCartItems")
      } else if (data?.data === "INVALID_PAYMENT") {
        handleToast("INVALID_PAYMENT");
      } else {
        handleToast(data.data);
      }
    },
  });

  return { data, isPending, verifyOrder };
}
export function useUpdateProfile() {
  const { dispatch, refresh } = useAppContext();
  const { handleToast } = useHandleApiResponse();
  const {
    data,
    isPending,
    mutate: updateProfile,
  } = useMutation({
    mutationFn: (data: any) => updateProfileAPI(data),
    onSuccess(data) {
      if (data?.data === "SUCCESS") {
        dispatch({
          type: "setRefresh",
          payload: !refresh,
        });
      }
      handleToast(data.data);
    },
  });

  return { data, isPending, updateProfile };
}
export function useUpdateAdress() {
  const { dispatch, refresh } = useAppContext();
  const { handleToast } = useHandleApiResponse();
  const {
    data,
    isPending,
    mutate: updateAddress,
  } = useMutation({
    mutationFn: (data: any) => updateAddressAPI(data),
    onSuccess(data) {
      if (data?.data === "SUCCESS") {
        dispatch({
          type: "setRefresh",
          payload: !refresh,
        });
      }
      handleToast(data.data);
    },
  });

  return { data, isPending, updateAddress };
}
export function useGetUserDetails() {
  const { handleToast } = useHandleApiResponse();
  const {
    data,
    isPending,
    mutate: getUserDetails,
  } = useMutation({
    mutationFn: (data: any) => getUserDetailsAPI(data),
    onSuccess(data) {
      if (data?.data === "SUCCESS") {
        localStorage.setItem(
          "MAPAddressFilled",
          (data?.user?.address === null)?.toString()
        );
      }

      if (data?.data !== "SUCCESS") {
        handleToast(data.data);
      }
    },
  });

  return { data, isPending, getUserDetails };
}
