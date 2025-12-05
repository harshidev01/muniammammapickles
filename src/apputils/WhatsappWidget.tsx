import React, { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);
  const phoneNumber = "919908927901";

  function handleChatStart() {
    const message =
      "Hey, I am interested. Can you explain the costs or prices?";
    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodedMessage}`,
      "_blank"
    );
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        widgetRef.current &&
        !widgetRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-[999]" ref={widgetRef}>
      {/* Minimized Button */}
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg"
        >
          <FaWhatsapp className="text-xl" />
          Message Us
        </button>
      ) : (
        // Chat Box
        <div className="w-72 bg-white rounded-lg shadow-xl overflow-hidden border">
          <div className="bg-green-700 text-white p-3 flex items-center justify-between">
            <div className="flex  items-center ">
              <img
                src="/final.png "
                className=" -mt-2 w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="text-sm font-bold">Muni Ammamma Pickles</h4>
                <p className="text-xs">The Joy of Homemade Taste</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-xl"
            >
              ×
            </button>
          </div>
          <div className="p-4 bg-gray-50 text-sm text-gray-800">
            Hi! Nice to see you here. Have worthy shopping and let me know if
            you have any further questions.
          </div>
          <div className="p-3">
            <button
              onClick={handleChatStart}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-lg" />
              Start Chat
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsappWidget;
