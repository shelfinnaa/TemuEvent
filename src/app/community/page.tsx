"use client"
import EventCard from "@/components/card"
import ExploreCategories from "@/components/categories"
import CallToAction from "@/components/cta"
import Footer from "@/components/footer"
import { SearchNavbar } from "@/components/navbar"
import { useRouter } from 'next/navigation'

const communityEvents = [
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
  {
    id: "7",
    title: "Embroidery Class Moon Orchid Pattern",
    date: "14",
    month: "APR",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 8 Seats left.",
    image: "/embroidery.jpg",
    productSlug: "embroidery-class",
  },
  {
    id: "8",
    title: "Kids Baking Class Orange Sponge Cake",
    date: "20",
    month: "AUG",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 3 seats left.",
    image: "/bake.jpg",
  },
  {
    id: "9",
    title: "Pottery Class - Create and Paint Your Own Mug I",
    date: "18",
    month: "SEP",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 7 Seats left.",
    image: "/pottery.jpg",
  },
]

export default function CommunityPage() {
  const router = useRouter()

  const handleCommunityClick = (event) => {
    if (event.productSlug) {
      router.push(`/product/${event.productSlug}`)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <SearchNavbar />

      {/* Community Events Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-[#894820]">
              Community
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityEvents.map((event) => (
              <EventCard 
                key={event.id}
                {...event}
                onClick={() => handleCommunityClick(event)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Explore Categories Section */}
      <ExploreCategories />

      {/* CTA Section */}
      <CallToAction />

      {/* Footer Section */}
      <Footer />
    </div>
  )
}