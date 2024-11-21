import AFooter from "@/Components/Admin/AFooter";
import AHeader from "@/Components/Admin/AHeader";
import { ASidebar } from "@/Components/Admin/ASidebar";
import AToogleSidebar from "@/Components/Admin/AToogleSidebar";
import { SidebarProvider, SidebarTrigger } from "@/Components/ui/sidebar";
import { ReactNode } from "react";

interface AdminLayoutProps {
    children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {

    return (
        <SidebarProvider>
            <ASidebar />
            <main className="min-h-screen flex flex-col w-full bg-zinc-50 transition-[margin-left] ease-in-out duration-300">
                <SidebarTrigger className="z-40 absolute top-2.5" />
                <AHeader />
                <div className="flex-grow">
                    {children}
                </div>
                <AFooter />
            </main>

        </SidebarProvider>
    );
};

export default AdminLayout;