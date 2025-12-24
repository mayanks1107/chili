import { motion } from "framer-motion"
import fresh from "../assets/fresh.jpeg"
import dried from "../assets/dried.jpeg"
import powder from "../assets/powder.png"
import topImage from "../assets/comparison.jpeg" // <-- new image to display above content

const fadeSlide = (direction = "left") => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -80 : 80,
    y: 30,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
})

export default function About() {
  const products = [
    {
      title: "Fresh Bhut Jolokia",
      desc:
        "Harvested at peak maturity to deliver maximum heat, aroma, and capsaicin. Hand-sorted and packed under controlled conditions to maintain freshness during export transit.",
      specs: [
        "SHU Range: 800,000 – 1,000,000+",
        "Moisture Content: 75–80%",
        "Colour: Green to deep red",
        "Shelf Life: 7–14 days (cold chain recommended)",
        "Use Cases: Sauce manufacturing, fermentation, fresh processing",
      ],
      direction: "left",
      image: fresh,
    },
    {
      title: "Oven-Dried Bhut Jolokia",
      desc:
        "Carefully oven-dried under controlled temperatures to preserve volatile oils, heat intensity, and colour. Ensures uniform drying and reduced microbial load.",
      specs: [
        "SHU Retention: 90–95% of fresh chilli",
        "Moisture Content: ≤10%",
        "Form: Whole pods / crushed",
        "Shelf Life: 12–18 months",
        "Use Cases: Spice brands, food processors, grinding",
      ],
      direction: "right",
      image: dried,
    },
    {
      title: "Bhut Jolokia Powder",
      desc:
        "Finely milled from premium oven-dried pods under hygienic conditions. Offers excellent dispersion, pungency, and stability for industrial food applications.",
      specs: [
        "SHU Range: 700,000 – 900,000+",
        "Moisture Content: ≤8%",
        "Particle Size: Customizable",
        "Shelf Life: 18–24 months",
        "Use Cases: Seasonings, blends, extracts, manufacturing",
      ],
      direction: "left",
      image: powder,
    },
  ]

  return (
    <section className="bg-gradient-to-b from-[#FFF3E0] to-[#FFF7ED] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-28">

        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeSlide("left")}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-red-800 tracking-tight">
            Products We Deal With
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            At Waithai Organics, we work closely with local farmers to source ethically grown Bhut Jolokia, ensuring traceability, consistency, and sustainability at every stage. Our chillies are carefully harvested, sorted, and processed to preserve their potency and flavour, making them ideal for sauces, spice blends, extracts, and food manufacturing worldwide. With a strong focus on quality control and reliable logistics, we export premium Bhut Jolokia to global markets with trust and transparency.
          </p>

          {/* NEW IMAGE ABOVE CONTENT */}
<div className="relative w-full mt-8 rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-orange-100 to-orange-200">
  <img
    src={topImage}
    alt="Top banner"
    className="w-full h-full object-contain object-center rounded-3xl"
  />
  <div className="absolute inset-0 rounded-3xl ring-1 ring-black/5" />
</div>
        </motion.div>

        {/* PRODUCTS */}
        {products.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeSlide(item.direction)}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* EXISTING PRODUCT IMAGE */}
            <div className="relative">
              <div className="h-80 md:h-[420px] rounded-3xl bg-gradient-to-br from-orange-200 to-orange-100 flex items-center justify-center text-gray-500 text-lg shadow-inner overflow-hidden">
                <img
                  src={item.image}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <div className="absolute inset-0 rounded-3xl ring-1 ring-black/5" />
            </div>

            {/* CONTENT */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-red-800">{item.title}</h2>

              <p className="text-gray-700 leading-relaxed text-lg">{item.desc}</p>

              <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-lg">
                <h3 className="font-semibold text-lg mb-3 text-gray-900">
                  Technical Specifications
                </h3>
                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                  {item.specs.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
