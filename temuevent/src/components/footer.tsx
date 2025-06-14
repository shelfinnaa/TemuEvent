import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#894820] text-white py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Copyright */}
          <div className="text-sm text-white/80">Copyright © 2024. TemuEvent</div>

          {/* Logo */}
          <div className="text-xl font-bold">TemuEvent</div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
