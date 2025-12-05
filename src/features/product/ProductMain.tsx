/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppContext } from "@/apputils/AppContext";
import AppSpinner from "@/apputils/AppSpinner";
import Footer from "@/apputils/Footer";
import NavBar from "@/apputils/NavBar";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  addToCartProductType,
  productDataType,
} from "@/types/product/ProductDataTypes";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoChevronBackOutline } from "react-icons/io5";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

function ProductMain() {
  const navigate = useNavigate();
  const [noOfItems, setNoOfItems] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<number>(4);
  const { id } = useParams();
  const { pickelsData } = useAppContext();
  const { toast } = useToast();

  const [productData, setProductData] = useState<productDataType | undefined>(
    undefined
  );

  useEffect(() => {
    if (id) {
      getProductData();
    }
  }, [id]);

  function getProductData() {
    for (let index = 0; index < pickelsData?.length; index++) {
      if (pickelsData[index]?.productId === id) {
        setProductData(pickelsData[index]);
      }
    }
  }

  function handleIncrement() {
    setNoOfItems(noOfItems + 1);
  }
  function handleDecrement() {
    if (noOfItems > 1) {
      setNoOfItems(noOfItems - 1);
    }
  }

  function handleAddToCart() {
    const raw = localStorage.getItem("mapCartItems");
    const cartItems: addToCartProductType[] = raw ? JSON.parse(raw) : [];
    if (productData) {
      for (let index = 0; index < cartItems?.length; index++) {
        if (cartItems[index].productId === productData?.productId) {
          cartItems[index].size = selectedSize;
          cartItems[index].quantity = noOfItems;
          localStorage.setItem("mapCartItems", JSON.stringify(cartItems));
          toast({
            variant: "constructive",
            title: "Item added successfully",
          });

          return;
        }
      }

      const addToCartProductData: addToCartProductType = {
        description: productData?.description,
        isKgs: productData?.isKgs,
        isML: productData?.isMl,
        imageUrl: productData?.imageUrl,
        price: productData?.price,
        productId: productData?.productId,
        productName: productData?.productName,
        quantity: noOfItems,
        size: selectedSize,
      };
      cartItems.push(addToCartProductData);
      localStorage.setItem("mapCartItems", JSON.stringify(cartItems));
      toast({
        variant: "constructive",
        title: "Item added successfully",
      });

      return;
    }
  }

  return (
    <div>
      {<AppSpinner isPending={!productData} />}
      <NavBar />
      <div className="ml-4 mt-2">
        <Button
          className=""
          onClick={() => {
            navigate("/collection");
          }}
          variant={"ghost"}
        >
          <IoChevronBackOutline /> Back
        </Button>
      </div>

      {productData && (
        <div className="flex items-center justify-center mt-5 ">
          <div className="w-full flex-col  items-center justify-center flex ">
            <div className="gap-10 flex lg:flex-row flex-col justify-between w-[90%]  lg:w-[70%]">
              <img
                src={productData?.imageUrl}
                className=" w-fit min-h-[40vh] lg:h-[60vh] rounded-lg "
              />
              <div className="flex flex-col gap-2 w-fit ">
                <div className="flex-col flex gap-3">
                  <h1 className=" font-semibold text-2xl text-foreground">
                    {productData?.productName}
                  </h1>
                  <h2 className=" font-light text-foreground/70 text-xl">
                    <span className="text-foreground">Rs.</span>{" "}
                    {parseInt((productData?.price / selectedSize) as any)}
                  </h2>
                </div>
                <div className="text-foreground/60">
                  Shipping calculated at checkout.
                </div>
                <p className="lg:w-[30vw] text-foreground/60 ">
                  <span className="text-foreground">PRODUCT DESCRIPTION :</span>{" "}
                  {productData?.description}
                </p>
                <p className="lg:w-[30vw] text-foreground/60 ">
                  <span className="text-foreground">Shelf Life :</span> 6
                  months.
                </p>
                <p className="lg:w-[30vw] text-foreground/60 ">
                  <span className="text-foreground">Product storage :</span>{" "}
                  Keep it at room temperature in a cool, dry place for 2 days
                  and store it in the refrigerator.
                </p>

                <div className="flex-col flex gap-1">
                  <div className="font-semibold text-foreground/60 text-sm">
                    <span className="text-foreground">SIZE : </span>300G
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => {
                        setSelectedSize(4);
                      }}
                      className="h-8"
                      variant={selectedSize === 4 ? "secondary" : "outline"}
                    >
                      250g
                    </Button>
                    <Button
                      onClick={() => {
                        setSelectedSize(2);
                      }}
                      className="h-8"
                      variant={selectedSize === 2 ? "secondary" : "outline"}
                    >
                      500g
                    </Button>
                    <Button
                      onClick={() => {
                        setSelectedSize(1);
                      }}
                      className="h-8"
                      variant={selectedSize === 1 ? "secondary" : "outline"}
                    >
                      1kg
                    </Button>
                  </div>
                </div>
                <div className="flex gap-4 h-fit items-center">
                  <div className="border-2 border-black flex justify-between gap-7 p-2 items-center lg:w-[7vw]">
                    <MdOutlineHorizontalRule
                      className="cursor-pointer"
                      onClick={handleDecrement}
                    />
                    <div>{noOfItems}</div>
                    <FaPlus
                      onClick={handleIncrement}
                      className="cursor-pointer"
                    />
                  </div>
                  <Button
                    onClick={handleAddToCart}
                    className="rounded-none w-[50%] lg:w-[20vw]"
                    variant={"secondary"}
                  >
                    Add to cart
                  </Button>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-foreground/70 text-sm">
                    Vendor :{" "}
                    <span className="font-semibold text-foreground">
                      Muni ammmamma pickles
                    </span>
                  </div>
                  <div className="text-foreground/70 text-sm">
                    Availabilty :{" "}
                    <span className="font-semibold text-foreground">
                      {productData?.isAvailable ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>

                  <div className="text-foreground/70 text-sm">
                    Delivery :{" "}
                    <span className="font-semibold text-foreground">
                      Withn 7 days{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <section className="bg-white text-gray-800 border w-[90%] lg:w-[60%] mt-10">
              <h2 className="text-xl font-semibold border-b p-5 pb-2 mb-4 text-secondary">
                Description
              </h2>

              <div className="space-y-6 p-5">
                <div>
                  <h3 className="text-lg font-bold">Product Description</h3>
                  <p>
                    Every pickle tells a story — bold, spicy, tangy — but it’s
                    never complete on its own. Be it mango, chicken, fish,
                    mutton, or garlic, every kind of pickle needs the perfect
                    match: a fluffy paratha, a crispy dosa, hot rice, or a soft
                    idli. This isn’t just a side — it’s the soul of the meal.
                    Pickles deserve a pairing that elevates every bite to pure
                    satisfaction.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold">Ingredients</h3>
                  <ul className="list-disc list-inside ml-4">
                    {productData?.ingredients?.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold">Nutrition</h3>
                  <p>
                    At Priya Foods, we blend traditional wisdom with modern food
                    science. Our pickles are crafted using carefully selected
                    ingredients and cold-pressed oils that retain natural
                    goodness. Rich in essential nutrients and antioxidants,
                    every ingredient is chosen to not only add flavor but also
                    support well-being.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-secondary">
                    More About Our Pickles:
                  </h3>

                  <div className="mt-2">
                    <h4 className="font-semibold">
                      A Taste That Needs a Match
                    </h4>
                    <p>
                      Whether you're savoring a meat-based pickle or a tangy
                      fruit variety, it demands a partner — hot rice, soft
                      chapati, or a crunchy snack. Our pickles aren’t made to
                      sit alone — they’re made to belong.
                    </p>
                  </div>

                  <div className="mt-2">
                    <h4 className="font-semibold">
                      Taste, Purity & Hygiene Combined
                    </h4>
                    <p>
                      Fresh ingredients, refined oil, and strict quality checks
                      ensure every spoonful is packed with purity and punch.
                      Because great taste comes from uncompromised standards.
                    </p>
                  </div>

                  <div className="mt-2">
                    <h4 className="font-semibold">
                      Relish With All Indian Cuisines
                    </h4>
                    <p>
                      Our pickles are the secret sidekick to almost any Indian
                      meal — from breakfast to dinner, across all regions and
                      tastes. Enjoyed by everyone, from students to grandmas.
                    </p>
                  </div>

                  <div className="mt-2">
                    <h4 className="font-semibold">Packaging & Certification</h4>
                    <p>
                      Easy to carry, leakproof packaging. No breakage, no
                      hassle. Priya Foods is proudly ISO: 22000-2018 and HACCP
                      certified by Intertek.
                    </p>
                  </div>

                  <div className="mt-2">
                    <h4 className="font-semibold">Storage</h4>
                    <p>
                      Always use a dry spoon, mix well before serving, and keep
                      the oil layer intact to maintain freshness. Store in a
                      cool, dry place for extended shelf life — up to 12 months
                      after opening.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default ProductMain;
