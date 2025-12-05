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
  Shield,
  ClipboardList,
  Database,
  Zap,
  Globe,
  FileLock,
  TrashIcon,
  Eye,
  UserCheck,
  Clock,
  MapPin,
  FileWarning,
  Phone,
  Link2,
} from "lucide-react";
import PageWrapper from "@/apputils/PageWrapper";
import NavBar from "@/apputils/NavBar";
import Footer from "@/apputils/Footer";

const sections = [
  {
    id: "summary",
    title: "Summary",
    icon: <Shield className="w-6 h-6 text-indigo-500" />,
    content: (
      <>
        <p className="mb-4 text-sm">
          Muniammama Pickles values your privacy. We collect customer details such as name, address, and phone number to fulfill your orders, schedule timely deliveries, and respond to any questions. Your data is used strictly for service purposes and never sold or shared with advertisers.
        </p>
      </>
    ),
  },
  {
    id: "definitions",
    title: "Definitions",
    icon: <ClipboardList className="w-6 h-6 text-blue-500" />,
    content: (
      <p className="mb-4">
        <strong>“Personal Information”</strong> refers to data that identifies a customer, such as name, address, and phone number. <strong>“Services”</strong> refers to pickle ordering, packaging, delivery, and customer support offered by Muniammama Pickles.
      </p>
    ),
  },
  {
    id: "data-collected",
    title: "Data We Collect",
    icon: <Database className="w-6 h-6 text-green-500" />,
    content: (
      <ul className="list-disc ml-6 space-y-2">
        <li>Full Name</li>
        <li>Delivery Address</li>
        <li>Contact Number</li>
        <li>Email Address (optional)</li>
        <li>Order History</li>
        <li>Preferred Payment Method (no card details stored)</li>
      </ul>
    ),
  },
  {
    id: "use-of-data",
    title: "Use of Your Information",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    content: (
      <ul className="list-disc ml-6 space-y-2">
        <li>To confirm and process your pickle orders</li>
        <li>To arrange delivery to your address</li>
        <li>To contact you for delivery updates or feedback</li>
        <li>To improve our product offerings and services</li>
      </ul>
    ),
  },
  {
    id: "sharing",
    title: "Information Sharing",
    icon: <Globe className="w-6 h-6 text-teal-500" />,
    content: (
      <p className="mb-4">
        We do not sell your personal information. We only share your details with trusted delivery partners as needed to fulfill your orders. All partners follow strict confidentiality guidelines.
      </p>
    ),
  },
  {
    id: "security",
    title: "Data Security Measures",
    icon: <FileLock className="w-6 h-6 text-black" />,
    content: (
      <p className="mb-4">
        We take appropriate steps to protect your information, including secure order processing systems and limited access to customer data. While no system is fully immune, we continuously monitor and enhance our safeguards.
      </p>
    ),
  },
  {
    id: "retention",
    title: "Data Retention & Deletion",
    icon: <TrashIcon className="w-6 h-6 text-red-500" />,
    content: (
      <p className="mb-4">
        Your order information is retained only as long as needed for order tracking, customer service, or legal compliance. You may request deletion of your personal information anytime by contacting us.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies & Tracking",
    icon: <Eye className="w-6 h-6 text-blue-600" />,
    content: (
      <p className="mb-4">
        Our website may use basic cookies to remember your preferences or past orders. You can disable cookies in your browser, but it may impact your experience.
      </p>
    ),
  },
  {
    id: "user-rights",
    title: "Your Privacy Rights",
    icon: <UserCheck className="w-6 h-6 text-teal-700" />,
    content: (
      <ul className="list-disc ml-6 space-y-2">
        <li>Right to access your personal data</li>
        <li>Right to correct any inaccurate details</li>
        <li>Right to request deletion of your data</li>
        <li>Right to limit the use of your data</li>
      </ul>
    ),
  },
  {
    id: "children",
    title: "Children’s Privacy",
    icon: <Clock className="w-6 h-6 text-gray-400" />,
    content: (
      <p className="mb-4">
        Our services are intended for individuals aged 18 and older. We do not knowingly collect data from minors. If we learn that a minor has submitted personal data, we will remove it promptly.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "Third-Party Links",
    icon: <Link2 className="w-6 h-6 text-blue-500" />,
    content: (
      <p className="mb-4">
        Our site may link to external pages such as social media or payment providers. We are not responsible for their privacy policies—please read them carefully before using those services.
      </p>
    ),
  },
  {
    id: "international",
    title: "Data Transfers",
    icon: <MapPin className="w-6 h-6 text-pink-400" />,
    content: (
      <p className="mb-4">
        Our business operates within India, and all data is stored securely within the country. We do not transfer your data internationally.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Policy Updates",
    icon: <FileWarning className="w-6 h-6 text-orange-500" />,
    content: (
      <p className="mb-4">
        We may occasionally update this privacy policy. Changes will be posted on this page with a new effective date. We encourage you to review it periodically.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    icon: <Phone className="w-6 h-6 text-green-400" />,
    content: (
      <>
        <p className="mb-2">Have questions about privacy or your data?</p>
        <p className="mb-1">
          <strong>Email:</strong> orders@muniammamapickles.com
        </p>
        <p>
          <strong>Phone:</strong> +91-XXXXXXXXXX
        </p>
      </>
    ),
  },
];

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <div className="flex flex-col">
        <NavBar />
        <div className="min-h-screen w-full flex justify-center">
          <div className="lg:w-[80vw] mx-auto py-12 px-4 sm:px-6 lg:px-8">
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
                Muniammama Pickles Privacy Policy
              </h1>
              <p className="text-lg text-gray-700 mb-8 font-roboto">
                Effective Date: April 21, 2025
              </p>

              <Card className="mb-8 shadow-lg bg-white">
                <CardHeader className=" border-b border-gray-200">
                  <h2 className="text-xl sm:text-2xl font-semibold text-indigo-700 flex items-center space-x-2 font-montserrat">
                    {sections[0].icon}
                    <span>{sections[0].title}</span>
                  </h2>
                </CardHeader>
                <CardContent className="p-6 text-gray-700 font-roboto leading-relaxed">
                  {sections[0].content}
                </CardContent>
              </Card>

              <Accordion type="single" collapsible className="space-y-6">
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
                  onClick={() => navigate("/contact")}
                >
                  Contact Us
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

export default PrivacyPolicy;
