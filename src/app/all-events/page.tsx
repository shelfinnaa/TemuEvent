"use client"
import EventCard from "@/components/card"
import ExploreCategories from "@/components/categories"
import CallToAction from "@/components/cta"
import Footer from "@/components/footer"
import { SearchNavbar } from "@/components/navbar"
import { useRouter } from 'next/navigation'

const allEvents = [
  // Workshop Events
  {
    id: "workshop-1",
    title: "Embroidery Class Moon Orchid Pattern",
    date: "14",
    month: "APR",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 8 Seats left.",
    image: "/embroidery.jpg",
    productSlug: "embroidery-class",
    category: "Workshop"
  },
  {
    id: "workshop-2",
    title: "Kids Baking Class Orange Sponge Cake",
    date: "20",
    month: "AUG",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 3 seats left.",
    image: "/bake.jpg",
    category: "Workshop"
  },
  {
    id: "workshop-3",
    title: "Pottery Class - Create and Paint Your Own Mug I",
    date: "18",
    month: "SEP",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 7 Seats left.",
    image: "/pottery.jpg",
    category: "Workshop"
  },
  {
    id: "workshop-4",
    title: "Embroidery Class Moon Orchid Pattern",
    date: "14",
    month: "APR",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 8 Seats left.",
    image: "/embroidery.jpg",
    productSlug: "embroidery-class",
    category: "Workshop"
  },
  {
    id: "workshop-5",
    title: "Kids Baking Class Orange Sponge Cake",
    date: "20",
    month: "AUG",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 3 seats left.",
    image: "/bake.jpg",
    category: "Workshop"
  },
  {
    id: "workshop-6",
    title: "Pottery Class - Create and Paint Your Own Mug I",
    date: "18",
    month: "SEP",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 7 Seats left.",
    image: "/pottery.jpg",
    category: "Workshop"
  },
  {
    id: "workshop-7",
    title: "Embroidery Class Moon Orchid Pattern",
    date: "14",
    month: "APR",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 8 Seats left.",
    image: "/embroidery.jpg",
    productSlug: "embroidery-class",
    category: "Workshop"
  },
  {
    id: "workshop-8",
    title: "Kids Baking Class Orange Sponge Cake",
    date: "20",
    month: "AUG",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 3 seats left.",
    image: "/bake.jpg",
    category: "Workshop"
  },
  {
    id: "workshop-9",
    title: "Pottery Class - Create and Paint Your Own Mug I",
    date: "18",
    month: "SEP",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 7 Seats left.",
    image: "/pottery.jpg",
    category: "Workshop"
  },
  
  // Seminar Events
  {
    id: "seminar-1",
    title: "Embroidery Class Moon Orchid Pattern",
    date: "14",
    month: "APR",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 8 Seats left.",
    image: "/embroidery.jpg",
    productSlug: "embroidery-class",
    category: "Seminar"
  },
  {
    id: "seminar-2",
    title: "Kids Baking Class Orange Sponge Cake",
    date: "20",
    month: "AUG",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 3 seats left.",
    image: "/bake.jpg",
    category: "Seminar"
  },
  {
    id: "seminar-3",
    title: "Pottery Class - Create and Paint Your Own Mug I",
    date: "18",
    month: "SEP",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 7 Seats left.",
    image: "/pottery.jpg",
    category: "Seminar"
  },
  {
    id: "seminar-4",
    title: "Embroidery Class Moon Orchid Pattern",
    date: "14",
    month: "APR",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 8 Seats left.",
    image: "/embroidery.jpg",
    productSlug: "embroidery-class",
    category: "Seminar"
  },
  {
    id: "seminar-5",
    title: "Kids Baking Class Orange Sponge Cake",
    date: "20",
    month: "AUG",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 3 seats left.",
    image: "/bake.jpg",
    category: "Seminar"
  },
  {
    id: "seminar-6",
    title: "Pottery Class - Create and Paint Your Own Mug I",
    date: "18",
    month: "SEP",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 7 Seats left.",
    image: "/pottery.jpg",
    category: "Seminar"
  },
  {
    id: "seminar-7",
    title: "Embroidery Class Moon Orchid Pattern",
    date: "14",
    month: "APR",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 8 Seats left.",
    image: "/embroidery.jpg",
    productSlug: "embroidery-class",
    category: "Seminar"
  },
  {
    id: "seminar-8",
    title: "Kids Baking Class Orange Sponge Cake",
    date: "20",
    month: "AUG",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 3 seats left.",
    image: "/bake.jpg",
    category: "Seminar"
  },
  {
    id: "seminar-9",
    title: "Pottery Class - Create and Paint Your Own Mug I",
    date: "18",
    month: "SEP",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 7 Seats left.",
    image: "/pottery.jpg",
    category: "Seminar"
  },

  // Community Events
  {
    id: "community-1",
    title: "Embroidery Class Moon Orchid Pattern",
    date: "14",
    month: "APR",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 8 Seats left.",
    image: "/embroidery.jpg",
    productSlug: "embroidery-class",
    category: "Community"
  },
  {
    id: "community-2",
    title: "Kids Baking Class Orange Sponge Cake",
    date: "20",
    month: "AUG",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 3 seats left.",
    image: "/bake.jpg",
    category: "Community"
  },
  {
    id: "community-3",
    title: "Pottery Class - Create and Paint Your Own Mug I",
    date: "18",
    month: "SEP",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 7 Seats left.",
    image: "/pottery.jpg",
    category: "Community"
  },
  {
    id: "community-4",
    title: "Embroidery Class Moon Orchid Pattern",
    date: "14",
    month: "APR",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 8 Seats left.",
    image: "/embroidery.jpg",
    productSlug: "embroidery-class",
    category: "Community"
  },
  {
    id: "community-5",
    title: "Kids Baking Class Orange Sponge Cake",
    date: "20",
    month: "AUG",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 3 seats left.",
    image: "/bake.jpg",
    category: "Community"
  },
  {
    id: "community-6",
    title: "Pottery Class - Create and Paint Your Own Mug I",
    date: "18",
    month: "SEP",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 7 Seats left.",
    image: "/pottery.jpg",
    category: "Community"
  },
  {
    id: "community-7",
    title: "Embroidery Class Moon Orchid Pattern",
    date: "14",
    month: "APR",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 8 Seats left.",
    image: "/embroidery.jpg",
    productSlug: "embroidery-class",
    category: "Community"
  },
  {
    id: "community-8",
    title: "Kids Baking Class Orange Sponge Cake",
    date: "20",
    month: "AUG",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 3 seats left.",
    image: "/bake.jpg",
    category: "Community"
  },
  {
    id: "community-9",
    title: "Pottery Class - Create and Paint Your Own Mug I",
    date: "18",
    month: "SEP",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 7 Seats left.",
    image: "/pottery.jpg",
    category: "Community"
  },
  
  // Concert Events
  {
    id: "concert-1",
    title: "Embroidery Class Moon Orchid Pattern",
    date: "14",
    month: "APR",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 8 Seats left.",
    image: "/embroidery.jpg",
    productSlug: "embroidery-class",
    category: "Concert"
  },
  {
    id: "concert-2",
    title: "Kids Baking Class Orange Sponge Cake",
    date: "20",
    month: "AUG",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 3 seats left.",
    image: "/bake.jpg",
    category: "Concert"
  },
  {
    id: "concert-3",
    title: "Pottery Class - Create and Paint Your Own Mug I",
    date: "18",
    month: "SEP",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 7 Seats left.",
    image: "/pottery.jpg",
    category: "Concert"
  },
  {
    id: "concert-4",
    title: "Embroidery Class Moon Orchid Pattern",
    date: "14",
    month: "APR",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 8 Seats left.",
    image: "/embroidery.jpg",
    productSlug: "embroidery-class",
    category: "Concert"
  },
  {
    id: "concert-5",
    title: "Kids Baking Class Orange Sponge Cake",
    date: "20",
    month: "AUG",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 3 seats left.",
    image: "/bake.jpg",
    category: "Concert"
  },
  {
    id: "concert-6",
    title: "Pottery Class - Create and Paint Your Own Mug I",
    date: "18",
    month: "SEP",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 7 Seats left.",
    image: "/pottery.jpg",
    category: "Concert"
  },
  {
    id: "concert-7",
    title: "Embroidery Class Moon Orchid Pattern",
    date: "14",
    month: "APR",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 8 Seats left.",
    image: "/embroidery.jpg",
    productSlug: "embroidery-class",
    category: "Concert"
  },
  {
    id: "concert-8",
    title: "Kids Baking Class Orange Sponge Cake",
    date: "20",
    month: "AUG",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 3 seats left.",
    image: "/bake.jpg",
    category: "Concert"
  },
  {
    id: "concert-9",
    title: "Pottery Class - Create and Paint Your Own Mug I",
    date: "18",
    month: "SEP",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 7 Seats left.",
    image: "/pottery.jpg",
    category: "Concert"
  },

  // Class Events
  {
    id: "class-1",
    title: "Embroidery Class Moon Orchid Pattern",
    date: "14",
    month: "APR",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 8 Seats left.",
    image: "/embroidery.jpg",
    productSlug: "embroidery-class",
    category: "Class"
  },
  {
    id: "class-2",
    title: "Kids Baking Class Orange Sponge Cake",
    date: "20",
    month: "AUG",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 3 seats left.",
    image: "/bake.jpg",
    category: "Class"
  },
  {
    id: "class-3",
    title: "Pottery Class - Create and Paint Your Own Mug I",
    date: "18",
    month: "SEP",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 7 Seats left.",
    image: "/pottery.jpg",
    category: "Class"
  },
  {
    id: "class-4",
    title: "Embroidery Class Moon Orchid Pattern",
    date: "14",
    month: "APR",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 8 Seats left.",
    image: "/embroidery.jpg",
    productSlug: "embroidery-class",
    category: "Class"
  },
  {
    id: "class-5",
    title: "Kids Baking Class Orange Sponge Cake",
    date: "20",
    month: "AUG",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 3 seats left.",
    image: "/bake.jpg",
    category: "Class"
  },
  {
    id: "class-6",
    title: "Pottery Class - Create and Paint Your Own Mug I",
    date: "18",
    month: "SEP",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 7 Seats left.",
    image: "/pottery.jpg",
    category: "Class"
  },
  {
    id: "class-7",
    title: "Embroidery Class Moon Orchid Pattern",
    date: "14",
    month: "APR",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 8 Seats left.",
    image: "/embroidery.jpg",
    productSlug: "embroidery-class",
    category: "Class"
  },
  {
    id: "class-8",
    title: "Kids Baking Class Orange Sponge Cake",
    date: "20",
    month: "AUG",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 3 seats left.",
    image: "/bake.jpg",
    category: "Class"
  },
  {
    id: "class-9",
    title: "Pottery Class - Create and Paint Your Own Mug I",
    date: "18",
    month: "SEP",
    subtitle: "Sign up for our classes now!",
    seatsLeft: "Only 7 Seats left.",
    image: "/pottery.jpg",
    category: "Class"
  },
]

export default function AllEventsPage() {
  const router = useRouter()

  const handleEventClick = (event: { productSlug?: string }) => {
    if (event.productSlug) {
      router.push(`/product/${event.productSlug}`)
    }
  }

  const groupedEvents = allEvents.reduce<Record<string, typeof allEvents>>((acc, event) => {
    const category = event.category
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(event)
    return acc
  }, {})

  return (
    <div className="min-h-screen bg-white">
      <SearchNavbar />

      {/* All Events Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold text-[#894820]">
              All Events
            </h2>
          </div>

          {/* Display events grouped by category */}
          {Object.entries(groupedEvents).map(([category, events]) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-semibold text-[#894820] mb-6 pb-2">
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                  <EventCard 
                    key={event.id}
                    {...event}
                    onClick={() => handleEventClick(event)}
                  />
                ))}
              </div>
            </div>
          ))}
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