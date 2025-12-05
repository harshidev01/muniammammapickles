import { Button } from "@/components/ui/button";
import { useState } from "react";
import { IoAddSharp } from "react-icons/io5";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2, X } from "lucide-react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaUserEdit } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import AddProduct from "../addproduct/AddProduct";
import ProductActions from "./ProductActions";

function ManageProductsMain() {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [openProductActionDialog, setOpenProductActionDialog] =
    useState<boolean>(false);
  const [productActionMethod, setProductActionMethod] = useState<
    "DISABLE" | "DELETE" | "ENABLE" | undefined
  >();
  return (
    <div className="flex flex-col  p-4 gap-1  border mx-3">
      <div className="flex w-full justify-between">
        <div className="flex flex-row gap-2 items-center">
          <Input placeholder="Search products" icon="search" />
          <div className="flex items-center gap-3">
            <Button className="h-9" variant={"secondary"}>
              Search
            </Button>
            <Button className="h-9" variant={"ghost"}>
              <X className="w-5 h-5" /> Clear
            </Button>
          </div>
        </div>
        <Button
          variant={"secondary"}
          className=" flex items-center gap-1 h-8"
          onClick={() => {
            setOpenDialog(true);
          }}
        >
          <IoAddSharp className="w-10 h-10" /> Add Product
        </Button>
      </div>

      <div>
        <Table className="border ">
          <TableHeader className="bg-slate-100">
            <TableRow>
              <TableHead className="font-bold text-foreground ">
                {"Product Name"}
              </TableHead>
              <TableHead className="font-bold text-foreground ">
                {"Price"}
              </TableHead>
              <TableHead className="font-bold text-foreground ">
                {"Orders"}
              </TableHead>

              <TableHead className="font-bold text-foreground ">
                {"Available"}
              </TableHead>

              <TableHead className="font-bold text-foreground ">
                {"Out of stock"}
              </TableHead>

              <TableHead className="font-bold text-foreground ">
                {"Last edited"}
              </TableHead>

              <TableHead className="font-bold text-foreground ">
                {"Actions"}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>{"Chicken pickle"}</TableCell>
              <TableCell>{"999/kg"}</TableCell>
              <TableCell>{"12"}</TableCell>
              <TableCell>{"True"}</TableCell>
              <TableCell>{"False"}</TableCell>
              <TableCell>{"harshithavenkat017@gmail.com"}</TableCell>
              <TableCell>
                {
                  <div className="flex items-center gap-5 ">
                    <div title="More">
                      <Popover>
                        <PopoverTrigger>
                          <BsThreeDotsVertical
                            onClick={() => {}}
                            className="w-5 h-5 cursor-pointer hover:scale-105"
                          />
                        </PopoverTrigger>
                        <PopoverContent className="p-0 w-fit">
                          <div className="flex flex-col gpa-2">
                            <div className=" flex items-center lg:hover:bg-foreground/5 gap-2 w-full py-2 pl-3 pr-5  cursor-pointer">
                              <FaUserEdit className="w-4  h-4" /> Edit product
                            </div>

                            <div
                              onClick={() => {
                                setProductActionMethod("DELETE");
                                setOpenProductActionDialog(true);
                              }}
                              className=" flex items-center lg:hover:bg-foreground/5 gap-2 w-full py-2 pl-3 pr-5  cursor-pointer text-destructive"
                            >
                              <Trash2 className="w-4  h-4" /> Delete
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                }
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      {openDialog && (
        <AddProduct
          onClose={() => {
            setOpenDialog(false);
          }}
        />
      )}
      {openProductActionDialog && productActionMethod && (
        <ProductActions
          method={productActionMethod as never}
          setOpenDialog={setOpenProductActionDialog}
        />
      )}
    </div>
  );
}

export default ManageProductsMain;
