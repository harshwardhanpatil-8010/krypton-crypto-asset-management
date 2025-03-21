

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/sidebar";
import { Separator } from "@/components/ui/separator";

function Dashboard() {

  return (
    <SidebarProvider className="bg-krypton-900/20">
      <AppSidebar />
      <div className="flex-1 p-10">
        <SidebarTrigger className="md:hidden xl:hidden 2xl:hidden lg:hidden" />
        <h1 className="text-4xl text-white font-bold">Dashboard</h1>
               <Separator className="my-4 border-2 " />
      </div>
    </SidebarProvider>
  );
}

export default Dashboard;