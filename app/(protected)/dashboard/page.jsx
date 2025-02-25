

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/sidebar";

function Dashboard() {

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