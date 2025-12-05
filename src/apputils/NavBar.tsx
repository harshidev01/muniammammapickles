import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import CartMain from "@/features/cart/CartMain";
import { useEffect, useState } from "react";
import { useGetEmailId, useGetProfileUrl } from "./AppHooks";
function NavBar() {
  const navigate = useNavigate();
  const [openCart, setOpenCart] = useState<boolean>(false);
  const location = useLocation();
  const emailId = useGetEmailId();
  const profileUrl = useGetProfileUrl();

  useEffect(() => {
    setOpenCart(false);
  }, [location]);

  return (
    <header className="w-full sticky top-0 z-[200] bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="px-5 lg:px-20 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="flex relative">
            <div className="w-6 h-3 rotate-90 rounded-t-full bg-secondary"></div>
            <div className="w-6 h-3 rotate-180 -mt-3 -ml-3 rounded-t-full bg-secondary"></div>
          </div>
          <h1 className="text-xl lg:text-2xl font-bold text-secondary -ml-2 mt-1 tracking-tight">
            Muni Ammamma Pickles
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => navigate("/")}
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </button>

          <button
            onClick={() => navigate("/collection")}
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
          >
            Products
          </button>
          <button
            onClick={() => navigate("/about")}
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
          >
            About
          </button>
          <Sheet
            onOpenChange={(open: boolean) => {
              setOpenCart(open);
            }}
            open={openCart}
          >
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5 text-blue-600" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="px-3 z-[999]">
              <CartMain />
            </SheetContent>
          </Sheet>

          {emailId ? (
            <div
              className="w-10 h-10 cursor-pointer "
              onClick={() => {
                navigate("/profile");
              }}
            >
              <img
                src={profileUrl ? profileUrl : "/default_profile.webp"}
                className="h-10 w-10 object-fill rounded-full"
                alt="profile"
              />
            </div>
          ) : (
            <Button
              variant="outline"
              className="border-blue-500 text-blue-600 hover:bg-blue-50"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          )}
        </div>

        <div className="lg:hidden flex gap-2">
          <Sheet
            onOpenChange={(open: boolean) => {
              setOpenCart(open);
            }}
            open={openCart}
          >
            <SheetTrigger className="border border-primary/40" asChild>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5 text-blue-600" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-sm p-4 space-y-4 z-[999]"
            >
              <CartMain />
            </SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger asChild className="border border-primary/40">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5 text-blue-600" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="h-full flex  flex-col justify-between py-10 z-[999]"
            >
              <div className="flex flex-col gap-4 p-6  justify-between  h-full">
                <div
                  onClick={() => navigate("/")}
                  className="text-base font-medium text-gray-800 hover:text-blue-600 cursor-pointer "
                >
                  Home
                </div>
                <div
                  onClick={() => navigate("/collection")}
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
                {emailId ? (
                  <div className="flex  items-center gap-2 ">
                    <img
                      src={profileUrl ? profileUrl : "/default_profile.webp"}
                      className="h-10 w-10 object-fill rounded-full"
                      alt="profile"
                    />
                    <div
                      onClick={() => navigate("/profile")}
                      className="text-base font-medium text-gray-800 hover:text-blue-600 cursor-pointer"
                    >
                      Profile
                    </div>
                  </div>
                ) : (
                  <Button
                    variant="outline"
                    className="w-full border-blue-500 text-blue-600 hover:bg-blue-50"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Button>
                )}

                <div className="flex flex-col items-start space-y-4">
                  <h3 className="text-lg font-semibold">Legal</h3>
                  <div className=" text-sm flex gap-3 lg:gap-0 flex-col  items-start">
                    <button
                      onClick={() => navigate("/privacy-policy")}
                      className="hover:text-blue-300 transition duration-300 text-left"
                    >
                      Privacy Policy
                    </button>
                    <button
                      onClick={() => navigate("/terms")}
                      className="hover:text-blue-300 transition duration-300 text-left "
                    >
                      Terms of Service
                    </button>

                    <button
                      onClick={() => navigate("/cookie-policy")}
                      className="hover:text-blue-300 transition duration-300 text-left "
                    >
                      Cookie Policy
                    </button>

                    <button
                      onClick={() => navigate("/refund-policy")}
                      className="hover:text-blue-300 transition duration-300 text-left "
                    >
                      Refund Policy
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-start space-y-4">
                  <h3 className="text-lg font-semibold">Connect With Us</h3>
                  <div className="flex gap-6 text-2xl">
                    <button
                      onClick={() => navigate("/twitter")}
                      aria-label="Twitter"
                      className="border border-white rounded-full p-3 hover:bg-white hover:text-foreground transition duration-300"
                    >
                      <FaTwitter />
                    </button>
                    <button
                      onClick={() => navigate("/instagram")}
                      aria-label="Instagram"
                      className="border border-white rounded-full p-3 hover:bg-white hover:text-foreground transition duration-300"
                    >
                      <FaInstagram />
                    </button>
                    <button
                      onClick={() => navigate("/linkedin")}
                      aria-label="LinkedIn"
                      className="border border-white rounded-full p-3 hover:bg-white hover:text-foreground transition duration-300"
                    >
                      <FaLinkedinIn />
                    </button>
                  </div>
                </div>
              </div>
              <div className=" p-5 w-full flex flex-col md:flex-row justify-between items-center mt-5 border-t border-white/20 text-center text-sm text-foreground/50 gap-2">
                <p>© 2025 Muni ammamma pickles. All rights reserved.</p>
                <p className="">
                  Developed by{" "}
                  <span
                    className="text-primary  cursor-pointer"
                    onClick={() =>
                      window.open(
                        "mailto:harshithavenkat017@gmail.com?subject=Software development collaboration"
                      )
                    }
                  >
                    Harshitha Venkat💙{" "}
                  </span>
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
