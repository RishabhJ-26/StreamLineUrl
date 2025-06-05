"use client";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-100 flex items-center justify-center p-6">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-12 rounded-3xl shadow-xl max-w-2xl text-center"
      >
        <h1 className="text-5xl font-bold text-slate-800 mb-6">What is StreamlineURL?</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          StreamlineURL is your trusted URL shortening companion — focused on delivering speed,
          simplicity, and privacy. Our platform doesn’t collect data, show ads, or slow you down.
          Whether you’re sharing on social media, email, or anywhere else, StreamlineURL ensures your
          links stay clean and efficient.
        </p>
        <p className="mt-6 text-sm text-gray-400">
          Built with ❤️ by <a target="_blank" className="text-sky-500" href="http://github.com/RishabhJ-26">Rishabh Jain</a>
        </p>
      </motion.div>
    </main>
  );
}
