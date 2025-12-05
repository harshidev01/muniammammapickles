import { motion } from "framer-motion";
import HeroBanner from "../home/Test1";
import NavBar from "@/apputils/NavBar";
import Footer from "@/apputils/Footer";
import Testimonials from "../home/Testimonials";
import DeliverySection from "../home/DeliverySection";

export default function AboutMuniammamaPickles() {
  const features = [
    {
      id: "01",
      title: "Rooted in Tradition",
      description:
        "Every jar tells a story—crafted with age-old recipes passed down from generations.",
    },
    {
      id: "02",
      title: "Farm-Fresh Ingredients",
      description:
        "We handpick local, seasonal produce to ensure quality and authentic taste.",
    },
    {
      id: "03",
      title: "Small-Batch Crafting",
      description:
        "Made in small batches to preserve flavor integrity and freshness.",
    },
    {
      id: "04",
      title: "No Artificial Preservatives",
      description:
        "Our pickles are naturally fermented—free from chemicals or shortcuts.",
    },
    {
      id: "05",
      title: "Eco-Friendly Packaging",
      description:
        "Sustainability is core—we use recyclable jars and minimal plastic.",
    },
  ];

  return (
    <div className="bg-white text-gray-900 font-sans">
      <NavBar />
      <HeroBanner />

      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl text-pink-800 mb-4">Our Story</h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Muniammama Pickles was born from a cherished family recipe passed
            down through generations in South India. Our founder’s grandmother,
            lovingly called “Muniammama,” perfected the art of sun-cured,
            spice-rich pickles that captured the essence of homemade comfort.
            Today, we honor her legacy by crafting every jar with the same care,
            patience, and traditional methods—one batch at a time.
          </p>
        </motion.div>
      </section>

      <section className="bg-yellow-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl text-pink-800 mb-3">Our Mission</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              To bring the warmth of homemade pickles to every table, using
              honest ingredients, sun-drying techniques, and age-old recipes. We
              celebrate slow food in a fast world.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl text-pink-800 mb-3">Our Values</h3>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>Rooted in tradition, perfected with passion</li>
              <li>Clean ingredients, no preservatives</li>
              <li>Locally sourced produce</li>
              <li>Sustainably packed and naturally preserved</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 px-6 md:px-10 lg:px-20">
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((item) => (
            <div key={item.id} className="flex items-start space-x-4">
              <div className="text-[50px] text-outline font-unicafancy">
                {item.id}
              </div>
              <div>
                <h4 className="text-xl -mt-4 font-semibold text-gray-800">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 lg:px-[20vw]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="relative w-full md:w-1/2">
            <img
              src="/chef/1.jpg" 
              alt="About us"
              className="h-[70vh] rounded-lg object-cover"
            />

            <div className="absolute -top-5 -left-5 w-10 h-10 bg-yellow-400 rounded-full shadow-md animate-ping"></div>
            <div className="absolute -bottom-8 left-10 w-14 h-14 border-8 border-white rounded-full shadow-lg animate-bounce"></div>
            <div className="absolute top-1/3 -right-3 w-4 h-4 animate-ping bg-yellow-400 rounded-full"></div>

            <div className="absolute bottom-2 -right-10 lg:right-56 border border-foreground/10 transform -translate-x-1/2 bg-white px-6 py-10 shadow-xl rounded-lg lg:w-[10vw] text-center z-10">
                <h3 className="text-4xl font-extrabold text-purple-800 tracking-wide">
                  17 +
                </h3>
                <p className="mt-2 text-sm font-medium text-gray-700">
                  Years
                  <br />
                  Experience
                </p>
              </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-800 leading-tight">
              We are doing more than
              <br />
              you expect
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Faudantium magnam error temporibus ipsam aliquid neque quibusdam
              dolor, quia ea numquam assumenda mollitia dolorem impedit.
              Voluptate at quis exercitationem officia temporibus adipisci quae
              totam enim dolorem assumenda.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Consectetur adipisicing elit. Cupiditate nesciunt amet facilis
              numquam, nam adipisci qui voluptate voluptas enim obcaecati
              veritatis animi nulla, mollitia commodi quaerat ex, autem ea
              laborum.
            </p>
          </div>
        </div>
      </section>
      <DeliverySection />

      <Testimonials />

      <Footer />
    </div>
  );
}
