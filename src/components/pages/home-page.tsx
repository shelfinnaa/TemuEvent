"use client"
import ExploreCategories from "@/components/categories"
import EventCard from "@/components/card"
import CallToAction from "@/components/cta"
import Footer from "@/components/footer"
import { useRouter } from 'next/navigation'
import { HeroNavbar } from "@/components/navbar"

const events = [
  {
    id: "1",
    title: "Embroidery Class Moon Orchid Pattern",
    date: "14",
    month: "APR",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 8 Seats left.",
    image: "/embroidery.jpg",
    productSlug: "embroidery-class",
  },
  {
    id: "2",
    title: "Kids Baking Class Orange Sponge Cake",
    date: "20",
    month: "AUG",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 3 seats left.",
    image: "/bake.jpg",
  },
  {
    id: "3",
    title: "Pottery Class - Create and Paint Your Own Mug I",
    date: "18",
    month: "SEP",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 7 Seats left.",
    image: "/pottery.jpg",
  },
  {
    id: "4",
    title: "Embroidery Class Moon Orchid Pattern",
    date: "14",
    month: "APR",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 8 Seats left.",
    image: "/embroidery.jpg",
    productSlug: "embroidery-class",
  },
  {
    id: "5",
    title: "Kids Baking Class Orange Sponge Cake",
    date: "20",
    month: "AUG",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 3 seats left.",
    image: "/bake.jpg",
  },
  {
    id: "6",
    title: "Pottery Class - Create and Paint Your Own Mug I",
    date: "18",
    month: "SEP",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 7 Seats left.",
    image: "/pottery.jpg",
  },
]

export default function HomePage() {
  const router = useRouter()

  const handleWorkshopClick = (event) => {
    // Navigate to the product page
    router.push(`/product/${event.productSlug}`)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <HeroNavbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Discover Events in Surabaya
            <br />
            <span className="text-3xl md:text-5xl">– All in One Place!</span>
          </h1>

          <div className="bg-white rounded-full p-3 flex items-center gap-3 max-w-4xl mx-auto shadow-lg">
            <div className="flex-1 px-2">
              <input
                type="text"
                placeholder="Enter Keywords"
                className="w-full border border-amber-800 rounded-full px-6 py-3 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white"
              />
            </div>

            <button className="rounded-full px-6 py-3 hover:bg-gray-200 text-gray-700 font-medium transition-colors border border-amber-800">
              Filters
            </button>

            <button className="rounded-full px-8 py-3 bg-[#894820] hover:bg-[#AE6A3F] text-white font-medium transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Explore Categories Section */}
      <ExploreCategories />

      {/* This Week Events Section */}
      <section className="py-20 px-6 bg-white mb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#894820] mb-12">This Week Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventCard 
                            key={event.id}
                            {...event}
                            onClick={() => handleWorkshopClick(event)}
                          />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction />

      {/* Footer Section */}
      <Footer />
    </div>
  )
}