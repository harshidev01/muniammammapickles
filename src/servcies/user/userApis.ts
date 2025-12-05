/* eslint-disable @typescript-eslint/no-explicit-any */
import { postAPI } from "@/apiServices";

export function createOrderAPI(data: { emailId: string; amount: number }) {
  return postAPI("api/order/create", data);
}

export function verifyOrderAPI(data: {
  razorpayOrderId: string;
  razorpayPaymentId: string;
  razorpaySignature: string;
}) {
  return postAPI("api/order/verify", data);
}

export function updateProfileAPI(data: any) {
  return postAPI("user/pdetails", data);
}
export function updateAddressAPI(data: any) {
  return postAPI("user/adetails", data);
}
export function getUserDetailsAPI(data: any) {
  return postAPI("user/details", data);
}

