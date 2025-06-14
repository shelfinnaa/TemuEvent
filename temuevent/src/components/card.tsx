"use client"

import Image from "next/image"

interface EventCardProps {
  title: string
  date: string
  month: string
  subtitle: string
  seatsLeft: string
  image: string
  onClick?: () => void
}

export default function EventCard({ title, date, month, subtitle, seatsLeft, image, onClick }: EventCardProps) {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      {/* Image Section */}
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>

      {/* Content Section */}
      <div className="p-4 flex gap-4">
        {/* Date Section */}
        <div className="flex flex-col items-center justify-center min-w-[60px]">
          <div className="text-xs text-gray-500 font-medium uppercase">{month}</div>
          <div className="text-3xl font-bold text-gray-900">{date}</div>
        </div>

        {/* Event Details */}
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 mb-1 text-sm leading-tight">{title}</h3>
          <p className="text-xs text-gray-600 mb-1">{subtitle}</p>
          <p className="text-xs text-gray-500">{seatsLeft}</p>
        </div>
      </div>
    </div>
  )
}
