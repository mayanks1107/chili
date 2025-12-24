import img1 from "../assets/img-1.jpeg"

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-24 grid md:grid-cols-2 gap-10 items-center">
      
      {/* Text */}
      <div>
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#B23A48]">
          Authentic <span className="text-[#F5A623]">Chillies &</span> Spices
        </h2>

        <p className="mt-6 text-[#555555] max-w-md md:text-lg leading-relaxed">
          Bhut Jolokia, also known as Ghost Pepper, is one of the world’s hottest chillies, native to Northeast India. Grown in rich soil and nurtured through traditional farming practices, our Bhut Jolokia is known for its intense heat, deep aroma, and natural oil content. From fresh green and red pods to sun-dried whole chillies and finely ground powder, we deliver uncompromised quality that meets international export standards.
        </p>
      </div>

      {/* Image */}
      <div className="h-64 md:h-96 rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-[#FFE5D4] to-[#FFD8B4]">
        <img src={img1} alt="Spices" className="w-full h-full object-cover rounded-3xl" />
      </div>

    </section>
  )
}
