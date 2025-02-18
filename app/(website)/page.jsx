"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from 'next/navigation'
export default function Home() {
  const router = useRouter()
  return (
   <div className="container p-9">
    <Link href="/dashboard" className="border-2 border-blue-400 hover:bg-blue-900/50 transition-all duration-300 transform hover:scale-105 px-10 py-3 text-lg rounded-xl backdrop-blur-sm">Dashboard</Link>
   </div>
  );
}
