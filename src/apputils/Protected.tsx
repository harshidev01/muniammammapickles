import { useEffect } from "react";
import { useGetEmailId } from "./AppHooks";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { IoIosLogOut } from "react-icons/io";
import { Button } from "@/components/ui/button";

function Protected() {
  const emailId = useGetEmailId();
  const navigate = useNavigate();

  useEffect(() => {
    if (!emailId) {
      navigate("/login");
    }
  }, [emailId]);

  function handleLogout() {
    navigate("/");
    localStorage.removeItem("MAPEmailId");
    localStorage.removeItem("MAPName");
    localStorage.removeItem("MAPProfile");
    localStorage.removeItem("MAPAddressFilled");
  }

  return (
    <div className="flex flex-col ">
      <NavBar />
      <div className="relative">
        <div className="absolute right-10 top-5">
          <Button onClick={handleLogout} variant={"destructive"}>
            Logout <IoIosLogOut className="h-6 w-6 text-background" />
          </Button>
        </div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Protected;
