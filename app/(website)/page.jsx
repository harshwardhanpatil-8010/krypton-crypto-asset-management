"use client"

import Link from "next/link";

import Navbar from "./navbar";

export default function Home() {
 
  
    return (
      <section className="min-h-screen flex flex-col justify-center items-center w-full ">
        <Navbar />
        <div className="w-full flex flex-col items-center text-center px-4">
          <h1 className="text-center text-4xl md:text-5xl lg:text-8xl font-bold tracking-tight mb-10 mt-10">
            Get started with Krypton
          </h1>

          <div className="p-6">
            <Link 
              href="/register" 
              className="border-2 border-blue-400 hover:bg-blue-900/50 transition-all duration-300 transform hover:scale-105 px-10 py-3 text-lg rounded-xl backdrop-blur-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    );
}
