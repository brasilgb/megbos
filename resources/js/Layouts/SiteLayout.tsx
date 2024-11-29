import SFooter from "@/Components/Site/SFooter";
import SHeader from "@/Components/Site/SHeader";
import { ReactNode } from "react";

interface SiteLayoutProps {
    children: ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => {

    return (
            <main className="min-h-screen flex flex-col w-full bg-zinc-50 transition-[margin-left] ease-in-out duration-300">
                <SHeader />
                <div className="flex-grow">
                    {children}
                </div>
                <SFooter />
            </main>
    );
};

export default SiteLayout;