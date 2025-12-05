import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  ClipboardList,
  Briefcase,
  FileText,
  DollarSign,
  AlertTriangle,
  CreditCard,
  Phone,
  Truck,
} from "lucide-react";
import PageWrapper from "@/apputils/PageWrapper";
import NavBar from "@/apputils/NavBar";
import Footer from "@/apputils/Footer";

const sections = [
  {
    id: "summary",
    title: "Overview",
    icon: <Briefcase className="w-6 h-6 text-green-500" />,
    content: (
      <>
        <p className="mb-4 text-sm">
          Welcome to Muniammammapickles – your trusted source for homemade, preservative-free South Indian pickles. These Terms & Conditions govern your use of our website and services. By placing an order, you agree to our policies regarding purchases, deliveries, refunds, and product care.
        </p>
      </>
    ),
  },
  {
    id: "products",
    title: "Product Information",
    icon: <ClipboardList className="w-6 h-6 text-orange-500" />,
    content: (
      <>
        <p className="mb-4">
          All our pickles are handcrafted in small batches using traditional recipes. Ingredients, shelf life, and storage instructions are mentioned on each product page. Please read allergen info carefully before purchasing.
        </p>
      </>
    ),
  },
  {
    id: "shipping",
    title: "Shipping & Delivery",
    icon: <Truck className="w-6 h-6 text-blue-500" />,
    content: (
      <>
        <p className="mb-4">
          We currently ship across India. Orders are processed within 2-3 business days and shipped via reliable courier partners. Tracking details will be shared via email or SMS once dispatched.
        </p>
      </>
    ),
  },
  {
    id: "refund-policy",
    title: "Returns & Refunds",
    icon: <DollarSign className="w-6 h-6 text-red-500" />,
    content: (
      <>
        <p className="mb-4">
          Due to the perishable nature of pickles, we do not accept returns once a product is delivered. However, if your order is incorrect, damaged, or spoiled on arrival, you may request a refund or replacement within 3 days of delivery. Submit a photo and order number via email to initiate a claim.
        </p>
      </>
    ),
  },
  {
    id: "missing-items",
    title: "Missing or Damaged Items",
    icon: <AlertTriangle className="w-6 h-6 text-yellow-600" />,
    content: (
      <>
        <p className="mb-4">
          If your package arrives with missing items or damage, please email us within 48 hours of receiving the parcel. Include images of the package and contents. We will investigate and resolve it as quickly as possible.
        </p>
      </>
    ),
  },
  {
    id: "cancellation",
    title: "Order Cancellation",
    icon: <FileText className="w-6 h-6 text-gray-500" />,
    content: (
      <>
        <p className="mb-4">
          Orders can be cancelled within 12 hours of placing them. After this window, we cannot guarantee cancellation as your order may have already begun processing.
        </p>
      </>
    ),
  },
  {
    id: "payment",
    title: "Payment Terms",
    icon: <CreditCard className="w-6 h-6 text-indigo-600" />,
    content: (
      <>
        <p className="mb-4">
          We accept payments through major debit/credit cards, UPI, and net banking. All payments are processed securely through our payment gateway partners. Prices listed include applicable GST.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact & Support",
    icon: <Phone className="w-6 h-6 text-green-400" />,
    content: (
      <>
        <p className="mb-4">
          For any queries or concerns, feel free to contact us:
        </p>
        <p className="mb-2">
          <strong>Email:</strong> support@muniammammapickles.com
        </p>
        <p>
          <strong>Address:</strong> 123 Spice Lane, Flavor Town, Tamil Nadu
        </p>
      </>
    ),
  },
];


const TermsAndConditions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="flex flex-col">
        <NavBar />
        <div className=" w-full justify-center flex  min-h-screen">
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
                Muniammammapickles Terms & Conditions
              </h1>
              <p className="text-lg text-gray-700 mb-8 font-roboto">
                Effective Date: April 21, 2025
              </p>

              <Card className="mb-8 shadow-lg bg-white">
                <CardHeader className=" border-b border-gray-200">
                  <h2 className="text-2xl mt-3 font-semibold text-indigo-700 flex items-center space-x-2 font-montserrat">
                    {sections[0].icon}
                    <span className="">{sections[0].title}</span>
                  </h2>
                </CardHeader>
                <CardContent className="p-6 text-gray-700 font-roboto leading-relaxed">
                  {sections[0].content}
                </CardContent>
              </Card>

              <Accordion type="single" collapsible className="space-y-4">
                {sections.slice(1).map((section) => (
                  <AccordionItem
                    key={section.id}
                    value={section.id}
                    className="border border-gray-200 rounded-md bg-white shadow-sm"
                  >
                    <AccordionTrigger className="p-4 text-gray-800 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-montserrat">
                      <div className="flex items-center space-x-2">
                        {section.icon}
                        <span className="font-medium">{section.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-4 text-gray-600 font-roboto leading-relaxed">
                      {section.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <motion.div
                className="mt-12 text-center"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Button
                  size="lg"
                  className="bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onClick={() => navigate("/signup")}
                >
                  Get Started
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    </PageWrapper>
  );
};

export default TermsAndConditions;
