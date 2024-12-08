import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-8 text-gray-300">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-white">
              Fortune House Hotel
            </h2>
            <p>185 Southeast 14th Terrace, Miami, Florida 33131</p>
            <p>Phone: (305) 349-5200</p>
            <p>Email: reservations@fortunehousehotel.com</p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              className="text-gray-400 hover:text-white"
            >
              <Facebook size={24} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://twitter.com"
              className="text-gray-400 hover:text-white"
            >
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://youtube.com"
              className="text-gray-400 hover:text-white"
            >
              <Youtube size={24} />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link
              href="https://instagram.com"
              className="text-gray-400 hover:text-white"
            >
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">
          © 2023 Fortune House Hotel. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
