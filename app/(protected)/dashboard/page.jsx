

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/sidebar";
import { Separator } from "@/components/ui/separator";
import { PortfolioSummary } from "./_components/portfolio-summary";
import { MarketOverview } from "./_components/market-overview";
import { RecentTransactions } from "./_components/recent-transactions";
import { AssetsList } from "./_components/asset-list";
import { PriceAlerts } from "./_components/price-list";
function Dashboard() {

  return (
    <SidebarProvider className="bg-krypton-900/20">
      <AppSidebar />
      <div className="flex-1 p-10">
        <SidebarTrigger className="md:hidden xl:hidden 2xl:hidden lg:hidden" />
        <h1 className="text-4xl text-white font-bold">Dashboard</h1>
               <Separator className="my-4 border-2 " />
               <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          <PortfolioSummary className="md:col-span-2 lg:col-span-3" />
          <MarketOverview className="md:col-span-2 lg:col-span-4" />
          <AssetsList className="md:col-span-2 lg:col-span-4" />
          <div className="space-y-6 md:col-span-2 lg:col-span-3">
            <RecentTransactions />
            <PriceAlerts />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default Dashboard;