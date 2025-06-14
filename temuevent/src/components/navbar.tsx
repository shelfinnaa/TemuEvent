import Image from "next/image"

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="TemuEvent Logo" width={140} height={140} className="logo" />
        </div>

        <div className="w-12 h-12 rounded-full border-2 border-white/70 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer overflow-hidden">
          <Image src="/user.png" alt="User Profile" width={28} height={28} className="rounded-full overflow-visible" />
        </div>
      </div>
    </header>
  )
}
