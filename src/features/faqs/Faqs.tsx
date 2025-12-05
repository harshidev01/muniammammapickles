// src/pages/Faqs.tsx

import Footer from "@/apputils/Footer";
import NavBar from "@/apputils/NavBar";
import PageWrapper from "@/apputils/PageWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import {
  FaShippingFast,
  FaCreditCard,
  FaRegCheckCircle,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaQuestionCircle,
  FaStore,
} from "react-icons/fa";

const faqs = [
  {
    question: "What is Muniammama Pickles?",
    answer:
      "Muniammama Pickles is a homemade pickle brand delivering traditional South Indian pickles across the region. We prioritize freshness, hygiene, and authentic taste.",
    icon: <FaStore className="text-indigo-500 w-6 h-6" />,
  },
  {
    question: "How can I place an order?",
    answer:
      "You can place an order via our website, WhatsApp, or by calling our customer support. Select your preferred pickle, quantity, and delivery option.",
    icon: <FaPhoneAlt className="text-green-500 w-6 h-6" />,
  },
  {
    question: "What delivery options are available?",
    answer:
      "We offer local same-day delivery in select areas and courier-based shipping across Tamil Nadu. Delivery timelines will be shown during checkout.",
    icon: <FaShippingFast className="text-blue-500 w-6 h-6" />,
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI, Google Pay, PhonePe, and Cash on Delivery (COD) for local orders. Online payments are processed securely.",
    icon: <FaCreditCard className="text-yellow-500 w-6 h-6" />,
  },
  {
    question: "Are your pickles made fresh?",
    answer:
      "Yes! All our pickles are made fresh in small batches using high-quality ingredients, without preservatives or additives.",
    icon: <FaRegCheckCircle className="text-teal-500 w-6 h-6" />,
  },
  {
    question: "Do you deliver outside India?",
    answer:
      "Currently, we deliver only within India. We're working on expanding our delivery network soon!",
    icon: <FaMapMarkedAlt className="text-purple-500 w-6 h-6" />,
  },
  {
    question: "Can I return or exchange pickles?",
    answer:
      "Due to the perishable nature of pickles, we do not offer returns. However, if there’s any issue with your order, we’ll resolve it immediately.",
    icon: <FaQuestionCircle className="text-red-500 w-6 h-6" />,
  },
];

export default function Faqs() {
  return (
    <PageWrapper>
      <div className="flex flex-col">
        <NavBar />
        <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            className="lg:w-[80vw] mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4 font-montserrat">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-roboto leading-relaxed">
              Here are answers to common questions about ordering and delivery from Muniammama Pickles.
            </p>
          </motion.div>

          <Accordion
            type="single"
            collapsible
            className="max-w-4xl mx-auto space-y-6"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-md bg-white shadow-sm"
              >
                <AccordionTrigger className="p-4 text-lg font-medium text-gray-800 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-montserrat flex items-center gap-3">
                  {faq.icon}
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="p-4 text-gray-600 text-base font-roboto leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <Footer />
      </div>
    </PageWrapper>
  );
}
