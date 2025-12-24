export default function Contact() {
  return (
    <section className="bg-[#FFF8F0] min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">

        {/* Hero / Banner */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#B23A48]">
            Contact Us
          </h1>
          <p className="text-[#555555] text-lg md:text-xl">
            We’re here to help — whether you have a question, feedback, or wholesale inquiry!
          </p>
        </div>

        {/* Contact Info + Form Grid */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT: Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-lg p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-[#B23A48]">
                Get in Touch
              </h2>

              <div>
                <h3 className="font-medium text-[#333]">Address</h3>
                <p className="text-[#555]">
                  H/No. 26A, W/No. 27, Barman Lane,
                  <br/> Near Overbridge, Tarapur, Silchar, Assam.
                  <br/>
                   District: Cachar, Pincode: 788003
                </p>
              </div>

              <div>
                <h3 className="font-medium text-[#333]">Phone</h3>
                <a href="tel:+918135045121" className="text-[#F5A623] font-semibold">
                  +91 81350 45121
                </a>
              </div>

              <div>
                <h3 className="font-medium text-[#333]">Email</h3>
                <a href="mailto:mimkemprai25@gmail.com" className="text-[#F5A623] font-semibold">
                  mimkemprai25@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6">
              <h3 className="font-semibold text-[#B23A48] text-lg">
                Office Hours
              </h3>
              <p className="text-[#555]">
                Mon – Sat: 9:00 AM – 6:00 PM
                <br />
                Sun: Closed
              </p>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-[#B23A48] mb-6">
              Send Us a Message
            </h2>

            <form
  action="https://formsubmit.co/mimkemprai25@gmail.com"
  method="POST"
  className="space-y-5"
>
              <input type="hidden" name="form-name" value="contact" />

              <div className="space-y-1">
                <label htmlFor="name" className="text-[#333] font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full border border-[#FFD8B4] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="text-[#333] font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full border border-[#FFD8B4] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-[#333] font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  className="w-full border border-[#FFD8B4] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#B23A48] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#F5A623] transition"
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
