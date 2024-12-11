import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: "1LXCV",
    name: "1 Luxury City View",
    price: 500,
    description: "A luxurious cabin with a stunning view.",
    src: "https://my.matterport.com/show/?m=eWt3Mtf8tuZ",
  },
  {
    id: "2LXCV",
    name: "Two BedroomLuxury City View",
    price: 300,
    description: "A spacious luxury cabin with panoramic views.",
    src: "https://my.matterport.com/show/?m=eWt3Mtf8tuZ",
  },
  {
    id: "1SCV",
    name: "One BedroomStandard City View",
    price: 260,
    description: "A comfortable standard cabin with a nice view.",
    src: "https://my.matterport.com/show/?m=eWt3Mtf8tuZ",
  },
  {
    id: "2SCV",
    name: "Two BedroomStandard City View",
    price: 449,
    description: "A roomy standard cabin with scenic views.",
    src: "https://my.matterport.com/show/?m=eWt3Mtf8tuZ",
  },
  {
    id: "2LXWV",
    name: "Two BedroomLuxury Water View",
    price: 678,
    description: "A luxury space with large windows and breathtaking views.",
    src: "https://my.matterport.com/show/?m=eWt3Mtf8tuZ",
  },
  {
    id: "1LXWV",
    name: "One BedroomLuxury Water View",
    price: 449,
    description: "A cozy luxury space with a picturesque Water View.",
    src: "https://my.matterport.com/show/?m=eWt3Mtf8tuZ",
  },
  {
    id: "2SWV",
    name: "Two BedroomStandard Water View",
    price: 590,
    description: "A standard space with pleasant Water Views.",
    src: "https://my.matterport.com/show/?m=eWt3Mtf8tuZ",
  },
  {
    id: "pool",
    name: "Pool & Jacuzzi",
    price: "",
    description: "A relaxing pool and jacuzzi area for ultimate comfort.",
    src: "https://my.matterport.com/show/?m=eWt3Mtf8tuZ",
  },
  {
    id: "gym",
    name: "Gym",
    price: "",
    description: "A fully-equipped gym for fitness enthusiasts.",
    src: "https://my.matterport.com/show/?m=eWt3Mtf8tuZ",
  },
  {
    id: "restaurant",
    name: "Restaurant",
    price: "",
    description: "A high-end restaurant space with gourmet potential.",
    src: "https://my.matterport.com/show/?m=SjNknZwSukG",
    // src: "https://my.matterport.com/show/?m=eWt3Mtf8tuZ",
  },
];

export default async function CategoryPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const category = categories.find((c) => c.id === id);

  if (!category) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
      <p className="text-xl mb-4">{category.description}</p>
      <p className="text-3xl font-bold text-primary mb-8">
        {category.id !== "restaurant" &&
          category.id !== "gym" &&
          category.id !== "pool" &&
          "$"}
        {category.price.toLocaleString()}
      </p>

      <div className="mb-8 flex items-center justify-center">
        <iframe
          width="100%"
          height="480"
          className="h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] 2xl:h-[36rem] rounded-lg"
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
