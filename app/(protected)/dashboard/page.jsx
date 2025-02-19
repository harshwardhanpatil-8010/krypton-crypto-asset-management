"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/sidebar";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token"); 

    if (!token) {
      router.replace("/login");
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p className="text-white text-center mt-10">Checking authentication...</p>;
  }

  return (
    <SidebarProvider className="bg-black">
      <AppSidebar />
      <div className="flex-1 p-10">
        <SidebarTrigger className="md:hidden xl:hidden 2xl:hidden lg:hidden" />
        <h1 className="text-4xl text-white font-bold">Dashboard</h1>
      </div>
    </SidebarProvider>
  );
}

export default Dashboard;
