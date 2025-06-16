import Image from "next/image"
import Link from "next/link"

// Version 1
export function HeroNavbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <Link href="/" className="cursor-pointer">
            <Image src="/logo.png" alt="TemuEvent Logo" width={140} height={140} className="logo" />
          </Link>
        </div>
        
        <div className="w-12 h-12 rounded-full border-2 border-white/70 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer overflow-hidden">
          <Image src="/user.png" alt="User Profile" width={28} height={28} className="rounded-full overflow-visible" />
        </div>
      </div>
    </header>
  )
}

export function Hero2Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <Link href="/" className="cursor-pointer">
            <Image src="/logo2.png" alt="TemuEvent Logo" width={140} height={140} className="logo" />
          </Link>
        </div>
        
        <div className="w-12 h-12 rounded-full border-2 border-[#1A1A1A] flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer overflow-hidden flex-shrink-0">
          <Image src="/user2.png" alt="User Profile" width={28} height={28} className="rounded-full overflow-visible" />
        </div>
      </div>
    </header>
  )
}

// Version 2 with search Navbar 
export function SearchNavbar() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 px-6 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto gap-6">
        <div className="flex items-center space-x-2 flex-shrink-0">
          <Link href="/" className="cursor-pointer">
            <Image src="/logo2.png" alt="TemuEvent Logo" width={120} height={120} className="logo" />
          </Link>
        </div>
        
        <div className="flex-1 max-w-2xl">
          <div className="bg-gray-50 rounded-full p-2 flex items-center gap-2">
            <div className="flex-1 px-2">
              <input
                type="text"
                placeholder="Enter Keywords"
                className="w-full border border-gray-800 rounded-full px-6 py-2.5 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white text-sm"
              />
            </div>

            <button className="rounded-full px-5 py-2.5 hover:bg-gray-200 text-gray-700 font-medium transition-colors border border-gray-800 text-sm">
              Filters
            </button>

            <button className="rounded-full px-6 py-2.5 bg-[#894820] hover:bg-[#AE6A3F] text-white font-medium transition-colors text-sm">
              Search
            </button>
          </div>
        </div>
        
        <div className="w-10 h-10 rounded-full border-2 border-[#1A1A1A] flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer overflow-hidden flex-shrink-0">
          <Image src="/user2.png" alt="User Profile" width={24} height={24} className="rounded-full overflow-visible" />
        </div>
      </div>
    </header>
  )
}

export default HeroNavbar