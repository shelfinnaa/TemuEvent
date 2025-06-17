"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface Category {
  id: string
  name: string
  image: string
}

const categories: Category[] = [
  { id: "all", name: "All", image: "/all.png" },
  { id: "seminar", name: "Seminar", image: "/seminar.png" },
  { id: "workshop", name: "Workshop", image: "/workshop.png" },
  { id: "community", name: "Community", image: "/community.png" },
  { id: "concert", name: "Concert", image: "/concert.png" },
  { id: "class", name: "Class", image: "/class.png" },
]

interface ExploreCategoriesProps {
  onCategoryClick?: (categoryId: string) => void
}

export default function ExploreCategories({ onCategoryClick }: ExploreCategoriesProps) {
  const router = useRouter()

  const handleCategoryClick = (categoryId: string) => {
    if (onCategoryClick) {
      onCategoryClick(categoryId)
      return
    }

    if (categoryId === "all") {
      router.push("/all-events")
      return
    }

    router.push(`/${categoryId}`)
  }

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-amber-800 mb-12">Explore Categories</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="flex flex-col items-center group cursor-pointer"
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="relative w-30 h-30 mb-4 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-lg font-bold text-amber-800 group-hover:text-amber-700 transition-colors duration-300">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}