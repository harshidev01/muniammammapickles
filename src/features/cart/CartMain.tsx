/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useGetAddressFilled,
  useGetEmailId,
  useGetName,
} from "@/apputils/AppHooks";
import AppSpinner from "@/apputils/AppSpinner";
import { Button } from "@/components/ui/button";
import { useCreateOrder, useVerifyOrder } from "@/hooks/user/userHooks";
import { addToCartProductType } from "@/types/product/ProductDataTypes";
import { Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";
import { useToast } from "@/components/ui/use-toast";

function CartMain() {
  const navigate = useNavigate();
  const cartData = localStorage.getItem("mapCartItems");
  const cartItems: addToCartProductType[] = JSON.parse(cartData as never) ?? [];
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [agreed, setAgreed] = useState<boolean>(false);
  const emailId = useGetEmailId();
  const { createOrder, isPending } = useCreateOrder();
  const { Razorpay } = useRazorpay();
  const myName = useGetName();
  const { isPending: verifyOrderPending, verifyOrder } = useVerifyOrder();
  const { toast } = useToast();
  const addressFillded = useGetAddressFilled();
  const key = process.env.REACT_APP_RAZORPAY_KEY_ID

  const [cartProducts, setCartProducts] =
    useState<addToCartProductType[]>(cartItems);

  useEffect(() => {
    if (!cartProducts && cartItems) {
      setCartProducts(cartItems);
    }
    handleCalculateTotalPrice();
  }, [cartItems, cartProducts]);

  function handleCalculateTotalPrice() {
    let price = 0;

    for (let index = 0; index < cartProducts?.length; index++) {
      price =
        price +
        (cartProducts[index].price / cartProducts[index].size) *
          cartProducts[index].quantity;
    }
    setTotalPrice(price);
  }

  function handleDelete(index: number) {
    const temp = cartProducts?.filter((_, index1) => index1 != index);
    setCartProducts(temp);
    localStorage.setItem("mapCartItems", JSON.stringify(temp));
  }
  function handlePlaceOrder() {
    if (!emailId) {
      toast({
        title: "Please login to continue",
        description: "You must be logged in to place an order.",
        variant: "constructive",
      });
      navigate("/login");
    } else if (addressFillded === "true") {
      toast({
        title: "Please fill in your address to continue",
        description: "We need your address to deliver your pickles!",
        variant: "destructive", // or "constructive" if you defined a custom variant
      });

      navigate("/profile");
    } else {
      createOrder(
        {
          emailId,
          amount: parseInt(totalPrice as any),
        },
        {
          onSuccess(data) {
            if (data?.data === "SUCCESS") {
              handlePayment(data?.orderId, data?.amount);
            }
          },
        }
      );
    }
  }

  function handlePayment(orderId: string, amount: number) {
    const options: RazorpayOrderOptions = {
      key: key as any,
      amount,
      currency: "INR",
      name: "Muni Ammamma Pickles",
      description: "Order Payment for Homemade Pickles",
      order_id: orderId,
      handler: (response) => {
        if (
          response.razorpay_order_id &&
          response?.razorpay_payment_id &&
          response?.razorpay_signature
        ) {
          verifyOrder({
            razorpayOrderId: response.razorpay_order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpaySignature: response.razorpay_signature,
          });
        }
      },
      prefill: {
        name: myName as any,
        email: emailId as any,
      },
      theme: {
        color: "#F37254",
      },
    };

    const razorpayInstance = new Razorpay(options);
    razorpayInstance.open();
  }

  return (
    <div className="flex flex-col justify-between h-full pb-4">
      {<AppSpinner isPending={isPending || verifyOrderPending} />}
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-bold  pt-2">SHOPPING CART</h2>
        <div className=" flex flex-col gap-4 h-[65vh] overflow-auto">
          {cartProducts?.length === 0 && (
            <div className="flex flex-col items-center justify-center text-center p-6 rounded-md bg-gray-50 border border-dashed border-gray-300">
              <CiShoppingCart className="h-16 w-16" />
              <h2 className="text-lg font-semibold text-gray-700">
                Your cart is empty
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Looks like you haven't added anything yet.
              </p>
              <button
                onClick={() => {
                  navigate("/collection");
                }}
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition"
              >
                Start Shopping
              </button>
            </div>
          )}

          {cartProducts?.map((item, index) => {
            return (
              <div
                className="gap-3 rounded flex relative  px-3 border border-foreground/10 p-2 shadow "
                key={index}
              >
                <div
                  className="absolute bottom-3 right-3"
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  <Trash className="w-6 h-6  bg-destructive cursor-pointer drop-shadow-md text-background p-1  shadow" />
                </div>
                <img
                  src={item?.imageUrl}
                  className="h-20 rounded bg-red-400  w-20"
                />
                <div className="flex flex-col justify-between">
                  <h2 className="font-medium text-sm">{item?.productName}</h2>
                  <p className="text-foreground/60 -mt-1">
                    {`${item?.description.slice(1, 35)} ${
                      item?.description?.length > 35 ? "..." : ""
                    }`}
                  </p>

                  <div className="flex flex-col  text-xs mt-1">
                    <div className="flex  flex-col">
                      <div className="flex items-center gap-1  ">
                        <span className="text-muted-foreground">Weight:</span>
                        <span className="font-medium">
                          {item?.size === 4
                            ? "250 g"
                            : item?.size === 2
                            ? "500 g"
                            : "1 kg"}
                        </span>
                      </div>

                      <div className="flex items-center gap-1  ">
                        <span className="text-muted-foreground">
                          Unit Price:
                        </span>
                        <span className="font-medium">
                          {(item?.price / item?.size).toFixed(2)} ₹
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1  ">
                      <span className="text-muted-foreground">Quantity:</span>
                      <span className="font-medium">{item?.quantity} pcs</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="text-sm flex justify-between font-medium mb-2">
          <span className="font-medium">Subtotal:</span>
          <span className="font-semibold">Rs. {totalPrice}.00</span>
        </div>

        <div className="mt-3 text-sm">
          <label className="flex items-start gap-2">
            <input
              checked={agreed}
              type="checkbox"
              className="mt-1 cursor-pointer"
              onClick={() => {
                setAgreed(!agreed);
              }}
            />
            <span>
              I agree with the{" "}
              <a
                onClick={() => {
                  navigate("/terms");
                }}
                className="underline cursor-pointer"
              >
                terms and conditions
              </a>
              . Customers are requested to record and share unboxing videos to
              claim any missing products. Claims must be raised within 24 hours
              of receipt.
            </span>
          </label>
        </div>
        <Button
          onClick={handlePlaceOrder}
          disabled={!agreed || totalPrice <= 0}
          className="w-full mt-3 bg-foreground hover:bg-foreground/90"
        >
          Place order
        </Button>
      </div>
    </div>
  );
}

export default CartMain;
