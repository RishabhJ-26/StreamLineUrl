"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-white via-sky-50 to-blue-100 min-h-screen px-6 py-12 text-slate-800">
      <section className="max-w-7xl mx-auto space-y-24">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-12">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className={`text-6xl font-extrabold ${poppins.className}`}>
              Simplify Your Links with{" "}
              <span className="text-sky-500">StreamlineURL</span>
            </h1>
            <p className="text-lg">
              Experience the cleanest, fastest, and most private way to share URLs — no tracking, no clutter.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="/contact">
                <button className="bg-sky-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-sky-600 transition">
                  Learn More
                </button>
              </Link>
              <Link href="/shorten">
                <button className="border border-sky-500 text-sky-500 font-semibold px-6 py-3 rounded-lg hover:bg-sky-100 transition">
                  Try It Now
                </button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 w-full rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src="/url-shortener.avif" // Replace this with a modern UI vector/illustration
              alt="Modern UI"
              fill
              className="object-cover"
            />
          </motion.div>
        </section>

        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-12 rounded-3xl shadow-2xl"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-10">Why Choose StreamlineURL?</h2>
          <div className="grid md:grid-cols-2 gap-8 text-lg">
            <Feature title="Blazing Fast" desc="Shorten URLs in milliseconds with no redirects or delays." />
            <Feature title="Privacy-First" desc="No ads. No analytics. Just safe and secure sharing." />
            <Feature title="Mobile Ready" desc="Optimized for phones, tablets, and desktops." />
            <Feature title="Free Forever" desc="No hidden charges. No subscriptions. 100% free." />
          </div>
        </motion.section>
      </section>
    </main>
  );
}

const Feature = ({ title, desc }) => (
  <div className="space-y-2">
    <h3 className="font-semibold text-sky-600">{title}</h3>
    <p>{desc}</p>
  </div>
);
