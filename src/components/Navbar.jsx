import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo-spices.jpeg"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <nav className="sticky top-0 z-50 bg-[#FFF8F0]/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">

        {/* Logo + Title */}
        <Link
          to="/"
          className="flex items-center gap-2 md:gap-3"
          onClick={closeMenu}
        >
          <img src={logo} alt="Mirchi Logo" className="h-10 md:h-12" />
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#B23A48]">
            WaiThai Organics
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium text-[#333333]">
          <Link to="/" className="hover:text-[#B23A48] transition">Home</Link>

          <Link to="/about" className="hover:text-[#B23A48] transition">About</Link>
          <Link to="/contact" className="hover:text-[#B23A48] transition">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-[#333]"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#FFF8F0] border-t border-[#FFD8B4]">
          <div className="flex flex-col gap-4 p-4 font-medium text-[#333]">
            <Link to="/" onClick={closeMenu} className="hover:text-[#B23A48] transition">Home</Link>
            
            <Link to="/about" onClick={closeMenu} className="hover:text-[#B23A48] transition">About</Link>
            <Link to="/contact" onClick={closeMenu} className="hover:text-[#B23A48] transition">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
