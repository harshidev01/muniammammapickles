import { useNavigate } from "react-router-dom";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-background text-foreground w-full lg:pt-16 pb-10 px-8 md:px-16 mt-10">
      <div className="w-full  mx-auto grid grid-cols-1 md:grid-cols-5 gap-16 items-center">
        {/* Brand */}
        <div className="flex flex-col  space-y-4 items-center">
          <div className="cursor-pointer  w-fit    ">
            <img src="/final.png" className="h-[20vh] lg:h-[20vh]" />
          </div>
          <p className="text-sm w-full text-center">
            Bringing families together with authentic, home-style pickles.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <div className=" text-sm flex  items-center gap-4">
            <button
              onClick={() => navigate("/about")}
              className="hover:text-blue-300 transition duration-300 text-left"
            >
              About Us
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="hover:text-blue-300 transition duration-300 text-left"
            >
              Contact
            </button>
            <button
              onClick={() => navigate("/faq")}
              className="hover:text-blue-300 transition duration-300 text-left"
            >
              FAQ
            </button>
          </div>
        </div>

        {/* Legal */}
        <div className="flex flex-col items-start space-y-4">
          <h3 className="text-lg font-semibold">Legal</h3>
          <div className=" text-sm  gap-3 lg:gap-0 grid lg:grid-cols-2  items-start">
            <button
              onClick={() => navigate("/privacy-policy")}
              className="hover:text-blue-300 transition duration-300 text-left text-nowrap"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => navigate("/terms")}
              className="hover:text-blue-300 transition duration-300 text-left text-nowrap"
            >
              Terms of Service
            </button>

            <button
              onClick={() => navigate("/cookie-policy")}
              className="hover:text-blue-300 transition duration-300 text-left text-nowrap"
            >
              Cookie Policy
            </button>

            <button
              onClick={() => navigate("/refund-policy")}
              className="hover:text-blue-300 transition duration-300 text-left text-nowrap"
            >
              refund Policy
            </button>
          </div>
        </div>

        {/* Social Media */}
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
      <div className="w-full h-[1px] bg-foreground/5 mt-10"> </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center mt-5 border-t border-white/20 text-center text-sm text-foreground gap-2">
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
            Harshihta Venkat💙
          </span>
        </p>
        <div className="flex space-x-6 lg:mt-4 md:mt-0">
          <button
            onClick={() => navigate("/twitter")}
            className="hover:underline"
          >
            Twitter
          </button>
          <button
            onClick={() => navigate("/linkedin")}
            className="hover:underline"
          >
            LinkedIn
          </button>
          <button
            onClick={() => navigate("/instagram")}
            className="hover:underline"
          >
            Instagram
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
