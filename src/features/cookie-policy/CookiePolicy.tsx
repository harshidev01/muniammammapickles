// src/pages/CookiePolicy.tsx

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
  Cookie,
  Info,
  Zap,
  Settings,
  Globe,
  EyeOff,
  Shield,
  MapPin,
  FileWarning,
  Phone,
} from "lucide-react";
import Footer from "@/apputils/Footer";
import NavBar from "@/apputils/NavBar";

const sections = [
  {
    id: "summary",
    title: "Summary",
    icon: <Cookie className="w-6 h-6 text-indigo-500" />,
    content: (
      <>
        <p className="mb-4 text-sm">
          <strong>Purpose & Scope:</strong> This Cookie Policy explains how
          Muniammama Pickles uses cookies and tracking technologies on our
          website to provide a smooth shopping experience, remember customer
          preferences, and understand site performance.
        </p>
        <p className="mb-4 text-sm">
          <strong>Categories & Use:</strong> We use essential, performance,
          functional, and marketing cookies to help ensure smooth order
          processing, quick navigation, personalized experience, and relevant
          communication.
        </p>
        <p className="mb-4 text-sm">
          <strong>Customer Choice:</strong> You can manage your cookie settings
          anytime. Disabling certain cookies may impact website functionality
          such as cart or checkout.
        </p>
      </>
    ),
  },
  {
    id: "definitions",
    title: "Definitions",
    icon: <Info className="w-6 h-6 text-blue-500" />,
    content: (
      <p className="mb-4">
        "Cookies" are small files saved to your device by our website. They help
        remember what’s in your cart or whether you're logged in. "Tracking
        technologies" include tools that help us analyze how customers use the
        site.
      </p>
    ),
  },
  {
    id: "types",
    title: "Types of Cookies",
    icon: <Settings className="w-6 h-6 text-green-500" />,
    content: (
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <strong>Essential Cookies:</strong> Necessary for cart, checkout,
          login, and security.
        </li>
        <li>
          <strong>Performance Cookies:</strong> Help us analyze how quickly the
          website loads and whether it’s working properly.
        </li>
        <li>
          <strong>Functionality Cookies:</strong> Remember things like your
          region, delivery preferences, and language.
        </li>
        <li>
          <strong>Marketing Cookies:</strong> Used to show you relevant offers
          and product promotions.
        </li>
      </ul>
    ),
  },
  {
    id: "use-of-cookies",
    title: "How We Use Cookies",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    content: (
      <ul className="list-disc ml-6 space-y-2">
        <li>Maintain your shopping cart between visits.</li>
        <li>Track order progress during checkout.</li>
        <li>Personalize product suggestions and offers.</li>
        <li>Measure performance of our marketing campaigns.</li>
      </ul>
    ),
  },
  {
    id: "third-party",
    title: "Third-Party Cookies",
    icon: <Globe className="w-6 h-6 text-teal-500" />,
    content: (
      <p className="mb-4">
        We use services like Google Analytics and Facebook Pixel. These
        third-party cookies help us improve the site and reach the right
        audience. Their data collection practices follow their own policies.
      </p>
    ),
  },
  {
    id: "managing-cookies",
    title: "Managing & Disabling Cookies",
    icon: <EyeOff className="w-6 h-6 text-gray-600" />,
    content: (
      <p className="mb-4">
        You can control cookies through your browser settings. Turning off
        cookies may affect how you shop or check out, but the site will still
        be usable.
      </p>
    ),
  },
  {
    id: "data-protection",
    title: "Data Protection & Security",
    icon: <Shield className="w-6 h-6 text-black" />,
    content: (
      <p className="mb-4">
        We store cookie data securely and only use it for improving your
        experience. No personal data is sold or shared unnecessarily.
      </p>
    ),
  },
  {
    id: "mobile-cookies",
    title: "Cookies on Mobile Devices",
    icon: <MapPin className="w-6 h-6 text-pink-400" />,
    content: (
      <p className="mb-4">
        Our cookie practices are the same on mobile devices. If you're using a
        mobile browser, you can control cookies in your device settings.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this Policy",
    icon: <FileWarning className="w-6 h-6 text-orange-500" />,
    content: (
      <p className="mb-4">
        We may update this Cookie Policy from time to time. Major changes will
        be communicated through our website or email.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Information",
    icon: <Phone className="w-6 h-6 text-green-400" />,
    content: (
      <>
        <p className="mb-2">For questions about our cookie use:</p>
        <ul className="list-disc ml-6">
          <li>
            <strong>Email:</strong> hello@muniammamapickles.in
          </li>
          <li>
            <strong>Address:</strong> 45 Pickle Street, Madurai, Tamil Nadu
          </li>
        </ul>
      </>
    ),
  },
];

const CookiePolicy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="min-h-screen w-full flex justify-center">
        <div className="lg:w-[80vw] mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            className="mb-6 text-gray-600 hover:text-indigo-600"
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
              Cookie Policy
            </h1>
            <p className="text-lg text-gray-700 mb-8 font-roboto">
              Effective Date: April 21, 2025
            </p>

            <Card className="mb-8 shadow-lg bg-white">
              <CardHeader className="border-b border-gray-200">
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
                  <AccordionTrigger className="p-4 text-gray-800 hover:bg-gray-100 font-montserrat">
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
                className="bg-indigo-600 text-white hover:bg-indigo-700"
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
  );
};

export default CookiePolicy;
