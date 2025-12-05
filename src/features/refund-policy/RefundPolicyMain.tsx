import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import PageWrapper from "@/apputils/PageWrapper";
import NavBar from "@/apputils/NavBar";
import Footer from "@/apputils/Footer";

export default function RefundPolicyPage() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="flex flex-col">
        <NavBar />

        <div className="w-full flex justify-center min-h-screen">
          <div className="lg:w-[80vw] py-12 px-4 sm:px-6 lg:px-8">
            <Button
              variant="ghost"
              className="mb-6 text-gray-600 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={() => navigate(-1)}
            >
              ← Back
            </Button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4 font-montserrat">
                Refund & Return Policy
              </h1>
              <p className="text-lg text-gray-700 mb-8 font-roboto">
                Effective Date: April 21, 2025
              </p>

              <Card className="mb-8 shadow-lg bg-white">
                <CardHeader className="border-b border-gray-200">
                  <h2 className="text-2xl mt-3 font-semibold text-indigo-700 font-montserrat">
                    Our Commitment
                  </h2>
                </CardHeader>
                <CardContent className="p-6 text-gray-700 font-roboto leading-relaxed">
                  At Muniammammapickles, your satisfaction is important to us.
                  While we take the utmost care in preparing and packaging your
                  orders, we understand that issues may sometimes arise.
                </CardContent>
              </Card>

              <Card className="mb-8 shadow-lg bg-white">
                <CardHeader className="border-b border-gray-200">
                  <h2 className="text-2xl mt-3 font-semibold text-indigo-700 font-montserrat">
                    Refund Eligibility
                  </h2>
                </CardHeader>
                <CardContent className="p-6 text-gray-700 font-roboto leading-relaxed space-y-4">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Refunds are only applicable for damaged, expired, or
                      incorrect items.
                    </li>
                    <li>
                      You must notify us within 48 hours of receiving your
                      order.
                    </li>
                    <li>
                      Photographic evidence of the issue is required for
                      processing.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8 shadow-lg bg-white">
                <CardHeader className="border-b border-gray-200">
                  <h2 className="text-2xl mt-3 font-semibold text-indigo-700 font-montserrat">
                    Process for Refund
                  </h2>
                </CardHeader>
                <CardContent className="p-6 text-gray-700 font-roboto leading-relaxed space-y-4">
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      Contact us via email or WhatsApp with your order number
                      and issue.
                    </li>
                    <li>Attach a clear photo of the item.</li>
                    <li>We will investigate and confirm eligibility.</li>
                    <li>
                      Once approved, your refund will be processed to your
                      original payment method within 5–7 business days.
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="mb-8 shadow-lg bg-white">
                <CardHeader className="border-b border-gray-200">
                  <h2 className="text-2xl mt-3 font-semibold text-indigo-700 font-montserrat">
                    Non-Refundable Items
                  </h2>
                </CardHeader>
                <CardContent className="p-6 text-gray-700 font-roboto leading-relaxed">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Products opened or tampered with.</li>
                    <li>
                      Orders with incorrect addresses provided by the customer.
                    </li>
                    <li>
                      Delays caused by courier partners (except in rare cases).
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <motion.div
                className="mt-12 text-center"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Button
                  size="lg"
                  className="bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onClick={() => navigate("/contact")}
                >
                  Contact Support
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    </PageWrapper>
  );
}
