/* eslint-disable @typescript-eslint/no-explicit-any */
import AppDialog from "@/apputils/AppDialog";
import { useImageUplaod } from "@/apputils/AppHooks";
import AppSpinner from "@/apputils/AppSpinner";
import { Button } from "@/components/ui/button";
import FileUplaod from "@/components/ui/file-upload";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { IoAddSharp } from "react-icons/io5";

interface AddProductInterface {
  onClose: () => void;
}
function AddProduct({ onClose }: AddProductInterface) {
  const { handleSubmit, register, formState, clearErrors, setValue } =
    useForm();
  const { errors } = formState;
  const { isPending: uploadingImage, uplaodImage } = useImageUplaod();
  const { toast } = useToast();

  function handleOnSelectFile(file: File) {
    setValue("image", file);
    clearErrors("image");
  }
  function handleAddProduct(e: any) {
    console.log(e);

    const imageFormdata = new FormData();
    imageFormdata.append("image", e?.image);
    imageFormdata.append("key", "b4dc048c04c6dc33d12850a906ada12c");

    uplaodImage(imageFormdata, {
      onSuccess(data) {
        console.log(data?.data);
        const imageUrl = data?.data?.data?.url;
        const imageDeleteUrl = data?.data?.data?.delete_url;
        if (imageUrl && imageDeleteUrl) {
          console.log(imageUrl);
        } else {
          toast({
            variant: "destructive",
            title: "File uplaod failed!",
          });
        }
      },
    });
  }

  return (
    <div>
      {<AppSpinner isPending={uploadingImage} />}
      <AppDialog title="Add product" onClose={onClose} placement="CENTER">
        <form
          onSubmit={handleSubmit(handleAddProduct)}
          className="flex  flex-col gap-2 "
        >
          <div className=" grid  lg:grid-cols-2 gap-8  border-b border-foreground/10 pb-5">
            <Input
              placeholder="Enter text.."
              label="Product name"
              mandatory
              errorMessage={errors?.productName?.message}
              {...register("productName", {
                required: "Please enter Product name",
              })}
            />
            <Input
              placeholder="Enter text.."
              label="Price"
              mandatory
              type="number"
              errorMessage={errors?.price?.message}
              {...register("price", {
                required: "Please enter Price",
              })}
            />

            <div className="flex flex-col gap-1">
              <label className="font-medium mb-1">Description</label>
              <Textarea
                className="resize-none"
                placeholder="e.g. Raw Mango, Salt, Oil"
                {...register("description", {
                  required: "Please enter Description",
                })}
              />
              {errors?.description && (
                <p className="text-destructive ">
                  {errors?.description?.message as string}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium mb-1">
                Ingredients (comma separated)
              </label>
              <Textarea
                className="resize-none"
                placeholder="e.g. Raw Mango, Salt, Oil"
                rows={3}
                {...register("ingredients", {
                  required: "Please enter ingredients",
                })}
              />
              {errors?.ingredients && (
                <p className="text-destructive ">
                  {errors?.ingredients?.message as string}
                </p>
              )}
            </div>

            <div className="flex flex-col  justify-between gap-3">
              <div className="flex flex-col gap-1">
                <label className="font-medium mb-1 flex items-center">
                  Select product selling type
                </label>
                <RadioGroup
                  className="flex  items-center"
                  defaultValue="kg"
                  {...register("pickleWeightType", {
                    required: false,
                  })}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="kg" id="kg" />
                    <label className="cursor-pointer" htmlFor="kg">
                      {`Kilograms (kg)`}
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ml" id="ml" />
                    <label className="cursor-pointer" htmlFor="ml">
                      {`Milliliters (ml)`}
                    </label>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-medium mb-1 flex items-center">
                  Pickle Type
                </label>
                <RadioGroup
                  className="flex items-center"
                  defaultValue="VEG"
                  {...register("pickleType", {
                    required: "Please select pickle type",
                  })}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="VEG" id="veg" />
                    <label htmlFor="veg" className="cursor-pointer">
                      Veg
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="NON_VEG" id="non-veg" />
                    <label htmlFor="non-veg" className="cursor-pointer">
                      Non-Veg
                    </label>
                  </div>
                </RadioGroup>
                {errors?.pickleType && (
                  <p className="text-destructive">
                    {errors?.pickleType?.message as string}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <FileUplaod
                onSelectFile={handleOnSelectFile}
                mandatory={true}
                {...register("image", {
                  required: "Please select Image",
                })}
              />
              <p className="text-destructive">
                {<label className="">{errors?.image?.message as string}</label>}
              </p>
            </div>
          </div>

          <div className="flex gap-2 mt-2">
            <Button
              className="w-1/2 flex items-center gap-1"
              variant={"ghost"}
              onClick={onClose}
            >
              <X className="w-5 h-5" /> Close
            </Button>
            <Button
              className="w-1/2 flex items-center gap-1"
              variant={"constructive"}
            >
              <IoAddSharp className="w-10 h-10" /> Add Product
            </Button>
          </div>
        </form>
      </AppDialog>
    </div>
  );
}

export default AddProduct;
