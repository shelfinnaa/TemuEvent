"use client"
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Hero2Navbar} from "@/components/navbar"
import Footer from "@/components/footer"
import {Calendar } from 'lucide-react'
import { use } from 'react'

interface ProductData {
  title: string
  date: string
  location: string
  price: string
  image: string
  description: string
  includes: string[]
}

interface ProductDataMap {
  [key: string]: ProductData
}

const productData: ProductDataMap = {
  "embroidery-class": {
    title: "Embroidery Class - Moon Orchid Pattern",
    date: "14 April 2025",
    location: "Rumah Dekor Surabaya",
    price: "Rp 200,000",
    image: "/embroidery.jpg",
    description: "Learn the art of embroidery with a delicate touch of Indonesian elegance. In this hands-on class, you'll stitch the beautiful Moon Orchid — Indonesia's national flower — using beginner-friendly techniques. All materials provided. Perfect for beginners and craft lovers!",
    includes: [
      "A complete embroidery kit (hoop, fabric, threads, needle, and pattern)",
      "Step-by-step instruction from an experienced tutor",
      "A finished Moon Orchid embroidery piece to take home",
      "A digital guide for continued practice",
      "Light snacks and refreshments",
      "A relaxing, supportive, and creative atmosphere",
      "New skills and inspiration for future projects"
    ]
  },
}

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter()
  const { slug } = use(params)
  
  const handleBack = () => {
    router.back()
  }

  // Get the product data using the slug from params
  const product = productData[slug]
  
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Coming soon</h1>
          <button 
            onClick={handleBack}
            className="bg-[#894820] hover:bg-[#AE6A3F] text-white px-6 py-3 rounded-lg font-bold"
          >
            Back
          </button>
        </div>
      </div>
    )
  }

  const handleEnroll = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSf7WCQp_c85Q30gcChFoB-_CKxoIAf3006XEQj6oaJOyQhquA/viewform', '_blank')
  }

  const handleContact = () => {
    window.open('https://api.whatsapp.com/send/?phone=628123533905&text&type=phone_number&app_absent=0', '_blank')
  }

  return (
    <div className="min-h-screen bg-white">
      <Hero2Navbar />
      
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-6">
        <button 
          onClick={handleBack}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-6 transition-colors"
        >
          <Image
            src="/back.png"
            alt="Back"
            width={30}
            height={30}
            className="mr-2"
          />
        </button>

        <div className="bg-white mb-12">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-3/5">
              <div className="relative h-80 md:h-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-3/5 p-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>
              
              <div className="flex flex-col space-y-2 mb-4">
                <div className="flex items-center text-gray-600 text-lg">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="font-bold">{product.date}, {product.location}</span>
                </div>
              </div>

              <div className="text-xl font-bold text-gray-600 mb-6">
                {product.price}
              </div>

              <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="flex space-x-3">
                <button 
                  onClick={handleEnroll}
                  className="bg-[#894820] hover:bg-[#AE6A3F] text-white px-10 py-2.5 rounded-full text-sm font-bold transition-colors duration-200"
                >
                  Enroll
                </button>
                <button 
                  onClick={handleContact}
                  className="bg-[#B8D8A7] hover:bg-green-700 text-black px-10 py-2.5 rounded-full text-sm font-bold transition-colors duration-200"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Join us for a relaxing and creative embroidery class where you'll learn to stitch the elegant Moon Orchid, 
            Indonesia's national flower. This workshop is perfect for beginners and craft enthusiasts alike, offering 
            step-by-step guidance on embroidery techniques in a friendly and supportive setting. All materials will be provided, so just bring your curiosity and 
            love for handmade art. By the end of the session, you'll take home your very own embroidered masterpiece and a new set 
            of skills to continue exploring this timeless craft.
          </p>
        </div>

        {/* What Will You Get Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">What Will You Get</h2>
          <div className="space-y-3">
            {product.includes.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
            <Footer />
    </div>
  )
}