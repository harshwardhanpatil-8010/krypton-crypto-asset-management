"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'
export default function Home() {
  const router = useRouter()
  return (
   <div>

    <Link href="/dashboard">Dashboard</Link>
   </div>
  );
}
