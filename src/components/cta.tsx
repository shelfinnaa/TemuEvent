import Image from "next/image"

export default function CallToAction() {
  return (
    <>
      <section className="bg-[#E8D5C4] py-4 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-16">

            <div className="flex-1 max-w-lg relative z-10">
              <div className="relative w-full -ml-8 -mb-8">
                <Image
                  src="/icon-cta.png"
                  alt="People creating events illustration"
                  width={500}
                  height={350}
                  className="w-full h-auto overflow-visible"
                />
              </div>
            </div>

            <div className="flex-1 max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">Make your own Event</h2>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Are you an organizer? Sign up now to be able to create new classes!
              </p>
              <button className="bg-[#894820] hover:bg-[#AE6A3F] text-white font-semibold py-3 px-20 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Create Events
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white py-8"></div>
    </>
  )
}
