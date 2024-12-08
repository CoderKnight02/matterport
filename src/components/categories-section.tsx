import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const categories = [
  { id: "1LXCV", name: "One Bedroom Luxury City View", price: 500, image: "/images/room.avif" },
  { id: "2LXCV", name: "Two Bedroom Luxury City View", price: 300, image: "/images/room.avif" },
  { id: "1SCV", name: "One Bedroom Standard City View", price: 260, image: "/images/room.avif" },
  { id: "2SCV", name: "Two Bedroom Standard City View", price: 449, image: "/images/room.avif" },
  { id: "2LXWV", name: "Two Bedroom Luxury Water View", price: 678, image: "/images/room.avif" },
  { id: "1LXWV", name: "One Bedroom Luxury Water View", price: 449, image: "/images/room.avif" },
  { id: "2SWV", name: "Two Bedroom Standard Water View", price: 590, image: "/images/room.avif" },
  { id: "pool", name: "Pool & Jacuzzi", price: '', image: "/images/room.avif" },
  { id: "gym", name: "Gym & Sauna", price: '', image: "/images/room.avif" },
  { id: "restaurant", name: "Madinsons Restaurant", price: '', image: "/images/restaurant.avif" }
]

export default function CategoriesSection() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Spaces</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link href={`/category/${category.id}`} key={category.id}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Image
                  src={category.image}
                  alt={category.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">{category.name}</CardTitle>
                <p className="text-2xl font-bold text-primary">{category.id !== "restaurant" && category.id !== "gym" && category.id !== "pool" && "$"}{category.price.toLocaleString()}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

