import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: "1LXCV",
    name: "1 Luxury City View",
    price: 1000000,
    description: "A luxurious cabin with a stunning view.",
    src:"https://my.matterport.com/show/?m=eWt3Mtf8tuZ",
  },
  {
    id: "2LXCV",
    name: "2 Luxury City View",
    price: 1500000,
    description: "A spacious luxury cabin with panoramic views.",
    src:"https://my.matterport.com/show/?m=eWt3Mtf8tuZ",
  },
  {
    id: "1SCV",
    name: "1 Standard City View",
    price: 750000,
    description: "A comfortable standard cabin with a nice view.",
    src:"https://my.matterport.com/show/?m=eWt3Mtf8tuZ",
  },
  {
    id: "2SCV",
    name: "2 Standard City View",
    price: 1000000,
    description: "A roomy standard cabin with scenic views.",
    src:"https://my.matterport.com/show/?m=eWt3Mtf8tuZ",
  },
  {
    id: "2LXWV",
    name: "2 Luxury Water View",
    price: 1200000,
    description: "A luxury space with large windows and breathtaking views.",
    src:"https://my.matterport.com/show/?m=eWt3Mtf8tuZ",
  },
  {
    id: "1LXWV",
    name: "1 Luxury Water View",
    price: 900000,
    description: "A cozy luxury space with a picturesque Water View.",
    src:"https://my.matterport.com/show/?m=eWt3Mtf8tuZ",
  },
  {
    id: "2SWV",
    name: "2 Standard Water View",
    price: 850000,
    description: "A standard space with pleasant Water Views.",
    src:"https://my.matterport.com/show/?m=eWt3Mtf8tuZ",
  },
  {
    id: "pool",
    name: "Pool & Jacuzzi",
    price: 2000000,
    description: "A relaxing pool and jacuzzi area for ultimate comfort.",
    src:"https://my.matterport.com/show/?m=eWt3Mtf8tuZ",
  },
  {
    id: "gym",
    name: "Gym",
    price: 1500000,
    description: "A fully-equipped gym for fitness enthusiasts.",
    src:"https://my.matterport.com/show/?m=eWt3Mtf8tuZ",
  },
  {
    id: "restaurant",
    name: "Restaurant",
    price: 2500000,
    description: "A high-end restaurant space with gourmet potential.",
    src:"https://my.matterport.com/show/?m=eWt3Mtf8tuZ",
  },
];

export default function CategoryPage({ params }: { params: { id: string } }) {
  const category = categories.find((c) => c.id === params.id);

  if (!category) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
      <p className="text-xl mb-4">{category.description}</p>
      <p className="text-3xl font-bold text-primary mb-8">
        ${category.price.toLocaleString()}
      </p>

      <div className="mb-8 flex items-center justify-center">
        <iframe
          width="100%"
          height="480"
          className="h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] 2xl:h-[36rem]"
          src={category.src}
          frameBorder="0"
          allowFullScreen
          allow="xr-spatial-tracking"
        ></iframe>
      </div>

      <Button asChild>
        <Link href="/">Back to All Spaces</Link>
      </Button>
    </div>
  );
}
