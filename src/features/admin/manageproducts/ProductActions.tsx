import AppDialog from "@/apputils/AppDialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { MdDelete } from "react-icons/md";
import { MdOutlineDesktopAccessDisabled } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";

interface ProductActionsInterface {
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  method: "DISABLE" | "DELETE" | "ENABLE";
}
function ProductActions({ setOpenDialog, method }: ProductActionsInterface) {
  return (
    <div>
      <AppDialog
        title={
          method === "DELETE"
            ? "Delete User"
            : method === "DISABLE"
            ? "Disable user"
            : "Enable user"
        }
        onClose={() => {
          setOpenDialog(false);
        }}
        placement="CENTER"
      >
        <div className="flex flex-col gap-4">
          <label>
            Are you sure? want to{" "}
            {method === "DELETE"
              ? "Delete this User"
              : method === "DISABLE"
              ? "Disable this user"
              : "Enable this user"}
            <span className="font-semibold">Harshitha Venkat </span>
          </label>
          <div className="flex gap-2">
            <Button
              className="w-1/2 flex items-center gap-1"
              variant={"ghost"}
              onClick={() => {
                setOpenDialog(false);
              }}
            >
              <X className="w-5 h-5" /> Close
            </Button>
            <Button
              className="w-1/2 flex items-center gap-1"
              variant={
                method === "DELETE" || method === "DISABLE"
                  ? "destructive"
                  : "constructive"
              }
            >
              {method === "DELETE" ? (
                <MdDelete className="w-10 h-10" />
              ) : method === "DISABLE" ? (
                <MdOutlineDesktopAccessDisabled className="w-4  h-4" />
              ) : (
                <VscWorkspaceTrusted className="w-4  h-4" />
              )}
              {method === "DELETE"
                ? "Delete "
                : method === "DISABLE"
                ? "Disable"
                : "Enable"}
            </Button>
          </div>
        </div>
      </AppDialog>
    </div>
  );
}

export default ProductActions;
