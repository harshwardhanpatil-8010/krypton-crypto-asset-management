import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup, 
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "Bridge",
    url: "/dashboard/bridge",
    icon: Home,
  },
  {
    title: "Sell", 
    url: "/dashboard/sell",
    icon: Inbox,
  },
  {
    title: "Buy",
    url: "/dashboard/buy", 
    icon: Calendar,
  },
  {
    title: "Swap",
    url: "/dashboard/swap",
    icon: Search,
  },
  {
    title: "Receive",
    url: "/dashboard/receive",
    icon: Settings,
  },
  {
    title: "Send",
    url: "/dashboard/send",
    icon: Settings,
  },
  {
    title: "Transfer",
    url: "/dashboard/transfer",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="bg-white border-r border-gray-200 shadow-lg z-50">
      <SidebarContent className="p-6">
        <SidebarGroup>
          <SidebarGroupLabel className="text-4xl text-white font-bold mt-2 tracking-tighter mb-12 justify-center">
            KRYPTON
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="mb-4">
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center gap-4 px-4 py-3 rounded-lg  group"
                    >
                      <item.icon className="w-5 h-5 text-gray-100 " />
                      <span className="text-gray-700 font-medium">
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
