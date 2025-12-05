import React from "react";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  review: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Rama Rao Garu",
    role: "Traditional Pickle Specialist",
    image: "/testimonials/1.webp",
    review:
      "These pickles remind me of my grandmother's recipe. Truly authentic and flavorful!",
    stars: 5,
  },
  {
    name: "Surekha Garu",
    role: "Home-Style Pickles Entrepreneur",
    image: "/testimonials/2.jpg",
    review:
      "Absolutely love the spice and aroma. These pickles bring the true taste of Andhra to every meal.",
    stars: 5,
  },
  {
    name: "Lakshmi Garu",
    role: "Head of Homemade Pickles",
    image: "/testimonials/3.avif",
    review:
      "Every jar of pickle feels like it’s made at home. Brings back so many memories!",
    stars: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-[#fdf9f3] py-24">
      <div className="container mx-auto px-4 text-center">
        <p className="text-orange-600 font-semibold text-lg mb-2">
          Testimonials
        </p>
        <h2 className="text-4xl font-extrabold mb-4 text-pink-800">
          Our Customers <span className="text-orange-500">Reviews</span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">
          Our pickles are made with traditional recipes and the finest
          ingredients to ensure every bite feels like home.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:px-[10vw]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 w-full rounded-lg shadow-sm border border-gray-200 text-left"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">"{testimonial.review}"</p>
              <div className="text-orange-500">
                {Array.from({ length: testimonial.stars }, (_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
