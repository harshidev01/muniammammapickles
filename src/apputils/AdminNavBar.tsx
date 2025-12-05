import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TbReorder } from "react-icons/tb";
import { FaBell } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { ImList } from "react-icons/im";

function AdminNavBar() {
  const navigate = useNavigate();

  return (
    <header className="w-full sticky top-0 z-[999] bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="px-5 lg:px-10 py-4 flex items-center justify-between">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="flex relative">
            <div className="w-6 h-3 rotate-90 rounded-t-full bg-blue-500"></div>
            <div className="w-6 h-3 rotate-180 -mt-3 -ml-3 rounded-t-full bg-blue-500"></div>
          </div>
          <h1 className="text-xl lg:text-2xl font-bold text-blue-600 tracking-tight">
            Muni Ammama Pickles
          </h1>
        </div>
        <div className="flex flex-row gap-6 items-center">
          <Button
            className=""
            variant={"secondary"}
            onClick={() => {
              navigate("/admin/products");
            }}
          >
            <ImList className="w-5 h-5   " />
            Products
          </Button>

          <Button
            className=""
            onClick={() => {
              navigate("/admin/users");
            }}
          >
            <FaUsers className="w-5 h-5   " />
            Manage Users
          </Button>

          <Button className="" variant={"constructive"}>
            <TbReorder className="w-5 h-5   " />
            orders
          </Button>

          <div className="cursor-pointer w-8 h-8 items-center justify-center flex shadow-md border rounded-full relative">
            <div className="w-4 rounded-full text-background h-4 text-[8px] bg-red-500 flex items-center justify-center absolute -top-2 -right-2 ">
              2
            </div>
            <FaBell className="w-5 h-6" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default AdminNavBar;

{
  /* <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5 text-blue-600" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-6 space-y-4">
              <div
                onClick={() => navigate("/products")}
                className="text-base font-medium text-gray-800 hover:text-blue-600 cursor-pointer"
              >
                Products
              </div>
              <div
                onClick={() => navigate("/about")}
                className="text-base font-medium text-gray-800 hover:text-blue-600 cursor-pointer"
              >
                About
              </div>
              <div
                onClick={() => navigate("/cart")}
                className="text-base font-medium text-gray-800 hover:text-blue-600 cursor-pointer"
              >
                Cart
              </div>
              <Button
                variant="outline"
                className="w-full border-blue-500 text-blue-600 hover:bg-blue-50"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
              <Button
                onClick={() => navigate("/pricing")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Get Started
              </Button>
            </SheetContent>
          </Sheet>
        </div> */
}
