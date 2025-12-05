/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppContext } from "@/apputils/AppContext";
import AppSpinner from "@/apputils/AppSpinner";
import Footer from "@/apputils/Footer";
import NavBar from "@/apputils/NavBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { productDataType } from "@/types/product/ProductDataTypes";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CollectionMain() {
  const navigate = useNavigate();
  const { pickelsData: pickles } = useAppContext();
  const [picklesData, setPicklesData] = useState<productDataType[]>(pickles);
  const [searchedValue, setSearchedValue] = useState<string>("");
  const [isLoading, setIsloading] = useState<boolean>(false);

  useEffect(() => {
    if (picklesData) {
      setPicklesData(pickles);
    }
  }, [pickles]);

  function handleOnSearch() {
    handleLoading();

    if (searchedValue) {
      const temp: productDataType[] = [];
      for (let index = 0; index < pickles?.length; index++) {
        if (
          pickles[index]?.productName
            ?.trim()
            ?.toLowerCase()
            .includes(searchedValue?.trim()?.toLowerCase())
        ) {
          temp.push(pickles[index]);
        }
        setPicklesData(temp);
      }
    } else {
      setPicklesData(pickles);
    }
  }

  function handleClearClick() {
    handleLoading();

    setSearchedValue("");
    setPicklesData(pickles);
  }

  function handleVegPickleSort() {
    handleLoading();

    const temp = [];

    for (let index = 0; index < pickles?.length; index++) {
      if (pickles[index]?.pickleType === "VEG") {
        temp.push(pickles[index]);
      }
    }

    setPicklesData(temp);
  }

  function handleNonVegPickleSort() {
    handleLoading();
    const temp = [];

    for (let index = 0; index < pickles?.length; index++) {
      if (pickles[index]?.pickleType === "NON_VEG") {
        temp.push(pickles[index]);
      }
    }

    setPicklesData(temp);
  }

  function handleLoading() {
    setIsloading(true);
    setTimeout(() => {
      setIsloading(false);
    }, 10);
  }

  return (
    <div className="flex flex-col h-fit">
      {<AppSpinner isPending={isLoading} />}
      <div>
        <NavBar />
      </div>
      <div className="flex flex-col  gap-5">
        <div className="bg-secondary p-4 w-full h-fit flex flex-row items-center">
          <img
            src="final.png"
            className="w-[25vw] lg:w-[15vw] lg:-mt-10  object-cover flex items-center"
            alt="Order List"
          />
          <div className="flex flex-col justify-center w-[70vw] items-center  ">
            <h1 className="font-semibold text-white text-lg text-center  lg:text-3xl flex items-center ">
              A SOULFUL DESTINATION OF PICKLES
            </h1>
            <h1 className="font-light text-center  hidden lg:flex text-white text-xl items-center ml-16 ">
              The Store For Home Made Food Products
            </h1>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row px-5 lg:px-0 gap-4 lg:gap-24 lg:mt-10  justify-center  ">
          <div className="lg:flex flex-col ">
            <div className="flex">
              <div className="w-full h-fit  flex gap-2  lg:gap-5 flex-col">
                <div className="flex-row lg:flex-col lg:items-start items-center gap-4 flex">
                  <Input
                    value={searchedValue}
                    onClear={handleClearClick}
                    onChange={(e) => {
                      const value = e?.target?.value;
                      setSearchedValue(value);
                    }}
                    icon="search"
                    className=""
                    placeholder="Search for product"
                  />
                  <div className="flex items-center lg:gap-3 ">
                    <Button disabled={!searchedValue} onClick={handleOnSearch}>
                      Search
                    </Button>

                    <Button
                      variant={"ghost"}
                      className="hidden lg:flex"
                      onClick={handleClearClick}
                    >
                      <X /> Clear
                    </Button>
                  </div>
                </div>
                <div className="flex-col flex  gap-1 lg:gap-3 ">
                  <div className="text-foreground  text-lg font-thin ">
                    Product Categories
                  </div>
                  <div className=" flex items-center lg:items-start  lg:flex-col gap-8 lg:gap-2">
                    <div
                      className="cursor-pointer"
                      onClick={handleVegPickleSort}
                    >
                      + Veg Pickles
                    </div>
                    <div
                      className="cursor-pointer"
                      onClick={handleNonVegPickleSort}
                    >
                      {" "}
                      + Non-Veg Pickles
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex-row gap-4 lg:gap-10 grid grid-cols-2 lg:grid-cols-3  lg:px-0 min-w-[50vw]">
            {picklesData?.map((pickle, index: number) => (
              <div
                key={index}
                className="  rounded-sm flex-col  items-center justify-center flex"
              >
                <img
                  src={pickle.imageUrl}
                  className="lg:h-[30vh] lg:w-[14vw] rounded"
                />
                <div className=" w-full h-fit flex-col justify-center items-center p-3">
                  <div className="font-semibold text-black w-full lg:h-[3vh] h-[5vh] flex justify-center">
                    {pickle?.productName}
                  </div>
                  <div className="text-gray-600 font-thin w-full flex justify-center">
                    {parseInt((pickle?.price / 4) as any)} -{" "}
                    {parseInt(pickle?.price as any)} .Rs
                  </div>
                  <Button
                    onClick={() => navigate(`/product/${pickle?.productId}`)}
                    className="mt-2 w-full flex justify-center"
                    variant={"secondary"}
                  >
                    Details
                  </Button>
                </div>
              </div>
            ))}
            {picklesData?.length === 0 && (
              <div className="flex justify-center w-full">No results found</div>
            )}
          </div>
        </div>
        <div className="bg-[#fcf6e8] w-full p-10 grid grid-cols-2 lg:grid-cols-4  justify-between gap-10 lg:gap-0 lg:px-[10vw] text-center">
          <div className="flex flex-col items-center gap-2">
            <img src="fast_shipping.png" className="lg:h-[14vh] lg:w-[7vw]" />
            <p>Fast Shipping</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img
              src="payment_protected.png"
              className="lg:h-[14vh] lg:w-[7vw]"
            />
            <p>Safe Payments</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src="24_support.png" className="lg:h-[14vh] lg:w-[7vw]" />
            <p>24x7 Support</p>
          </div>
          <div className="flex flex-col items-center gap-2  ">
            <img src="delivery_box.png" className="lg:h-[14vh] lg:w-[7vw]" />
            <p>Spill Proof packing</p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default CollectionMain;
