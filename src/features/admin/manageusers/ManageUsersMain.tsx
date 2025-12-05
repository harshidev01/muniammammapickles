import { Button } from "@/components/ui/button";
import { useState } from "react";
import { IoAddSharp } from "react-icons/io5";
import AddUser from "./AddUser";
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
import DeleteUser from "./UserActions";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaUserEdit } from "react-icons/fa";
import { MdOutlineDesktopAccessDisabled } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { Input } from "@/components/ui/input";

function ManageUsersMain() {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [openUserActionDialog, setOpenUserActionDialog] =
    useState<boolean>(false);
  const [userActionMethod, setUserActionMethod] = useState<
    "DISABLE" | "DELETE" | "ENABLE" | undefined
  >();
  return (
    <div className="flex flex-col  p-4 gap-1  border mx-3">
      
      <div className="flex w-full justify-between">
        <div className="flex flex-row gap-2 items-center">
          <Input placeholder="Search users" icon="search" />
          <div className="flex items-center gap-3">
            <Button className="h-9">Search</Button>
            <Button className="h-9" variant={"ghost"}>
              <X className="w-5 h-5" /> Clear
            </Button>
          </div>
        </div>
        <Button
          className=" flex items-center gap-1 h-8"
          onClick={() => {
            setOpenDialog(true);
          }}
        >
          <IoAddSharp className="w-10 h-10" /> Add User
        </Button>
      </div>

      <div>
        <Table className="border ">
          <TableHeader className="bg-slate-100">
            <TableRow>
              <TableHead className="font-bold text-foreground ">
                {"Full Name"}
              </TableHead>
              <TableHead className="font-bold text-foreground ">
                {"Email Id"}
              </TableHead>
              <TableHead className="font-bold text-foreground ">
                {"Role"}
              </TableHead>

              <TableHead className="font-bold text-foreground ">
                {"Actions"}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>{"Harshihta Venkat"}</TableCell>
              <TableCell>{"harshithavenkat017@gmail.com"}</TableCell>
              <TableCell>{"ADMIN"}</TableCell>
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
                              <FaUserEdit className="w-4  h-4" /> Edit user
                            </div>

                            <div
                              onClick={() => {
                                setUserActionMethod("ENABLE");
                                setOpenUserActionDialog(true);
                              }}
                              className=" flex items-center lg:hover:bg-foreground/5 gap-2 w-full py-2 pl-3 pr-5  cursor-pointer"
                            >
                              <VscWorkspaceTrusted className="w-4  h-4" />{" "}
                              Enable
                            </div>
                            <div
                              onClick={() => {
                                setUserActionMethod("DISABLE");
                                setOpenUserActionDialog(true);
                              }}
                              className=" flex items-center lg:hover:bg-foreground/5 gap-2 w-full py-2 pl-3 pr-5  cursor-pointer"
                            >
                              <MdOutlineDesktopAccessDisabled className="w-4  h-4" />{" "}
                              Disable
                            </div>

                            <div
                              onClick={() => {
                                setUserActionMethod("DELETE");
                                setOpenUserActionDialog(true);
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
      {openDialog && <AddUser setOpenDialog={setOpenDialog} />}
      {openUserActionDialog && userActionMethod && (
        <DeleteUser
          method={userActionMethod as never}
          setOpenDialog={setOpenUserActionDialog}
        />
      )}
    </div>
  );
}

export default ManageUsersMain;
