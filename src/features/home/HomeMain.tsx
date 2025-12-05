import NavBar from "@/apputils/NavBar";
import Footer from "@/apputils/Footer";
import DeliverySection from "./DeliverySection";
import Testimonials from "./Testimonials";
import HeroBanner from "./Test1";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
function HomeMain() {
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
  const navigate = useNavigate();

  const pickles = [
    {
      pic: "/chicken/chicken_bone_less.jpeg",
      title: "Chicken Pickle (Boneless)",
    },
    {
      pic: "/chicken/chicken_bone.webp",
      title: "Chicken Pickle (Bone)",
    },
    {
      pic: "/mango/mango_pickle.webp",
      title: "Mango Pickle",
    },

    {
      pic: "/mutton/mutton_pickle.webp",
      title: "Mutton Pickle",
    },

    {
      pic: "/pandu_mirchi/pandu_mirchi.webp",
      title: "Pandu Mirchi Pickle",
    },
  ];

  return (
    <div className="flex  flex-col">
      <NavBar />
      <div className="flex flex-col gap-14 items-center ">
        <div className="relative w-full  overflow-hidden">
          {/* Responsive Image with <picture> */}
          <picture>
            <source srcSet="/banner_image.jpg" media="(min-width:1024px)" />
            <img
              src="/banner_mobile.png"
              alt="Chicken Pickle Banner"
              className="w-full h-full object-cover"
            />
          </picture>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 lg:bg-black/0 z-10"></div>

          {/* Content */}
          <div className="absolute z-20 text-white left-[5vw] top-[13vh] max-w-xl flex flex-col gap-4">
            <h1 className="text-3xl lg:text-[50px] font-bold leading-tight text-balance">
              Irresistible Chicken Pickle Flavors
            </h1>
            <p className="text-lg lg:text-2xl text-balance">
              A bold twist on traditional flavors, crafted to excite your taste
              buds
            </p>
            <Button
              onClick={() => navigate("/collection")}
              className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-none transition w-fit"
            >
              Order Now
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 relative w-full">
          <h4 className="text-pink-800 text-3xl px-4">
            Explore our range of pickles
          </h4>
          <div className=" flex-row gap-10 grid grid-cols-2 lg:grid-cols-5 px-5 ">
            {pickles?.map((pickle, index: number) => (
              <div
                key={index}
                className="  rounded-sm flex-col  items-center justify-center flex"
              >
                <img
                  src={pickle?.pic}
                  className="h-[20vh] lg:h-[30vh] lg:w-[14vw] rounded"
                />
                <div className=" w-full h-fit flex-col justify-center items-center p-3">
                  <div className="font-semibold text-black w-full flex justify-center">
                    {pickle?.title}
                  </div>
                  <Button
                    onClick={() => navigate("/collection")}
                    className="mt-2 w-full flex justify-center"
                    variant={"secondary"}
                  >
                    Explore
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

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
                  <p className="text-gray-600 text-sm mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="relative">
          <img
            src="ing.png"
            className="z-50 rotate-180 absolute left-0 w-[10vw]  top-[0vh]"
          />
          <img
            src="ing.png"
            className="absolute right-0 z-50 w-[10vw]  bottom-[0vh]"
          />
          <DeliverySection />
        </div>
        <div className="flex flex-col items-center gap-5 relative w-full">
          <h4 className="text-secondary text-3xl">
            There's something for everyone
          </h4>
          <div className="flex flex-col lg:flex-row items-center justify-center w-[90%] lg:w-fit   gap-5">
            <div className="flex flex-col w-full lg:flex-row items-center gap-5">
              <img
                src="/chef/1.jpg"
                className="h-[25vh] w-full lg:h-[50vh] lg:w-[25vw] object-cover rounded-xl"
              />
              <img
                src="yoga/1.jpg"
                className="h-[25vh] lg:h-[50vh] lg:w-[25vw] object-cover rounded-xl"
              />
            </div>
            <img
              src="/student/1.jpg"
              className="h-[25vh] lg:h-[50vh] lg:w-[25vw] object-cover rounded-xl"
            />
          </div>
        </div>

        <Testimonials />
        <div className="w-full -mt-14">
          <HeroBanner />
        </div>

        <section className="py-20 lg:px-[20vw] relative">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
            {/* Left Image */}
            <div className="relative w-full md:w-1/2">
              <img
                src="/chef/1.jpg" // Replace with your image path
                alt="About us"
                className="h-[70vh] rounded-lg object-cover"
              />

              {/* Floating Decorative Circles */}
              <div className="absolute -top-5 -left-5 w-10 h-10 bg-yellow-400 rounded-full shadow-md animate-ping"></div>
              <div className="absolute -bottom-8 left-3 lg:left-10 w-14 h-14 border-8 border-white rounded-full shadow-lg animate-bounce"></div>
              <div className="absolute top-1/3 -right-3 w-4 h-4 animate-ping bg-yellow-400 rounded-full"></div>

              {/* Experience Card */}
              <div className="absolute bottom-2 -right-10 lg:right-56 lg:bottom-10 border border-foreground/10 transform -translate-x-1/2 bg-white px-6 py-10 shadow-xl rounded-lg lg:w-[10vw] text-center z-10">
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

            {/* Right Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-pink-800">
                We are doing more than
                <br />
                just making pickles
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                At <strong>Muni Ammamma Pickles</strong>, every jar is a
                celebration of tradition. We handcraft our pickles using age-old
                family recipes, premium ingredients, and a whole lot of
                love—just like your ammamma (grandmother) used to do.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our mission is simple: bring authentic Telugu flavors to every
                home. From the fiery Guntur avakaya to the tangy gongura, we go
                beyond expectations to deliver homemade taste, unmatched
                quality, and nostalgia in every bite.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-[#fcf6e8] w-full p-10 grid grid-cols-2 lg:grid-cols-4  justify-between gap-10 lg:gap-0 lg:px-[10vw] text-center">
          <div className="flex flex-col items-center gap-2">
            <img src="fast_shipping.png" className="lg:h-[14vh] lg:w-[7vw]" />
            <p>Fast Shipping</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img
              src="payment_protected.png"
              className="lg:h-[14vh] lg:w-[7vw]"
            />
            <p>Safe Payments</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src="24_support.png" className="lg:h-[14vh] lg:w-[7vw]" />
            <p>24x7 Support</p>
          </div>
          <div className="flex flex-col items-center gap-2  ">
            <img src="delivery_box.png" className="lg:h-[14vh] lg:w-[7vw]" />
            <p>Spill Proof packing</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 relative">
          <img
            src="ing.png"
            className="absolute left-0 w-[10vw] rotate-180 top-[0vh]"
          />
          <img
            src="ing.png"
            className="absolute right-0 w-[10vw]  -bottom-[10vh]"
          />

          <h4 className="text-pink-800 text-3xl">Our Promise</h4>
          <div>
            <img
              src="spices_detail.png"
              className="object-cover w-[100vw] h-[25vh] lg:h-fit"
            />
          </div>
          <div className=" flex flex-col gap-6 lg:max-w-[60%] px-3 lg:text-sm text-center">
            <p>
              Traditional food is more than just a meal—it's a memory, a
              celebration, and a connection to our roots. There’s nothing quite
              like the comforting smell of steaming hot rice paired with spicy
              avakaya, or the tangy burst of gongura pickle on a simple plate.
              At Muni Ammamma Pickles, we believe traditional recipes are
              timeless treasures, lovingly passed from one generation to the
              next.
            </p>

            <p>
              Our story is rooted in heritage—one where recipes are prepared the
              way your ammamma (grandmother) once made them: patiently,
              passionately, and without shortcuts. We use high-quality, natural
              ingredients and follow age-old preparation methods to preserve
              both flavor and authenticity.
            </p>

            <p>
              Muni Ammamma Pickles brings you the{" "}
              <strong>Joy of Authentic Telugu Taste</strong>, crafted with care
              from the rich culinary traditions of Andhra Pradesh and Telangana.
              We stay true to the spices, ingredients, and cooking tools that
              our ancestors cherished, so every bite delivers a taste of home.
            </p>

            <p>
              Founded with the vision of keeping regional flavors alive in
              modern kitchens, Muni Ammamma Pickles now serves families across
              India and beyond. Whether it’s our signature mango avakaya, tender
              ginger pickle, or fiery red chili chutney, each product is made in
              hygienic conditions, blending traditional wisdom with modern
              standards. <br />
              With a commitment to purity, flavor, and cultural pride, Muni
              Ammamma Pickles ensures that every jar you open brings back
              memories, sparks joy, and keeps the tradition alive—one spoonful
              at a time.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomeMain;
