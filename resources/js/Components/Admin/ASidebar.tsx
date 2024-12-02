import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/Components/ui/sidebar";
import { Link } from "@inertiajs/react";

import { Calendar, Home, Inbox, Search, Settings, User, Users2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/react-avatar";

export function ASidebar() {

    const items = [
        {
            title: "Home",
            url: route('dashboard'),
            icon: Home,
        },
        {
            title: "Clientes",
            url: route('customers.index'),
            icon: Users2,
        },
        {
            title: "Usuário",
            url: route('users.index'),
            icon: User,
        },
        // {
        //     title: "Search",
        //     url: "#",
        //     icon: Search,
        // },
        // {
        //     title: "Settings",
        //     url: "#",
        //     icon: Settings,
        // },
    ]

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild isActive className="text-base font-semibold">
                                        <Link
                                            href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
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