import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <section className="relative h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/bg-page.jpg" // Image from the public folder
            alt="Background Image"
            fill // New way to make the image fill the parent container
            style={{ objectFit: "cover", filter: "brightness(80%)" }} // Darken the image with a filter
            priority // Optional: Preloads the image for faster rendering
          />
        </div>

        {/* Content */}
        <div className="absolute top-4 left-4 p-4 z-10 text-left">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Welcome to Our Hospitality Spaces
          </h1>
          <p className="text-xl text-white">
            Explore our 3D models and find your perfect space
          </p>
        </div>
      </section>

      
      

    </>
    //
  );
}
