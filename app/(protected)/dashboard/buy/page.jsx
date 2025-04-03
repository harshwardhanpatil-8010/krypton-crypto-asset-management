import { Bell, Search, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "../_components/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"


export default function Page() {

  return (
     <SidebarProvider>
              
                 <AppSidebar />
    <div className="flex h-full w-full bg-black text-white">
      
<SidebarTrigger className="md:hidden xl:hidden 2xl:hidden lg:hidden" /> 
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Buy</h1>
               <Separator className="my-4 border-2 " />
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input className="w-[280px] pl-9 bg-[#1a1b1e] border-0" placeholder="Search for a token..." />
            </div>
            <Button variant="ghost" size="icon">
              <Wallet className="h-5 w-5" />
              <span className="ml-1">7</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
           
          </div>
        </div>

        <div className="max-w-[900px] mx-auto bg-[#1a1b1e] rounded-lg p-6">
          
          <div className="grid gap-8">
            <div className="flex gap-4">
             
            <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Country</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
              <DropdownMenuItem>🇮🇳</DropdownMenuItem>
              <DropdownMenuItem>🇮🇳</DropdownMenuItem>
              <DropdownMenuItem>🇮🇳</DropdownMenuItem>
              <DropdownMenuItem>🇮🇳</DropdownMenuItem>
              <DropdownMenuItem>🇮🇳</DropdownMenuItem>
              <DropdownMenuItem>🇮🇳</DropdownMenuItem>
              <DropdownMenuItem>🇮🇳</DropdownMenuItem>
              <DropdownMenuItem>🇮🇳</DropdownMenuItem>
              </DropdownMenuContent>
    </DropdownMenu>
              <Button variant="outline" className="bg-[#1a1b1e] border-gray-800">
                INR
              </Button>
            </div>

            <div className="text-center">
              <h2 className="text-5xl font-bold">₹4,345</h2>
            </div>

          </div>
        </div>
      </main>
    </div>

    </SidebarProvider>
  )
}

