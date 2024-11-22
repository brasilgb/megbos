import { Link } from "@inertiajs/react";
import { LucideIcon } from "lucide-react";

interface SBoxServicesProps {
    title: string;
    content: string;
    icone: LucideIcon;
}

const SBoxServices = (props: SBoxServicesProps) => {
    return (
        <div className='w-full bg-white rounded-md border border-gray-200 p-6'>
            <div className="text-blue-primary/80 bg-yellow-primary/50 rounded-full w-20 h-20 flex items-center justify-center">{<props.icone className="h-14 w-14" />}</div>
            <div className="text-gray-800 text-2xl py-2">{props.title}</div>
            <div className="text-gray-700">{props.content}</div>
            <div className="mt-4">
                <Link
                className="bg-yellow-primary px-6 py-2 rounded-full"
                    href={"#"}
                >
                    <span className="text-blue-primary font-sans font-semibold">Como funciona</span>
                </Link>
            </div>
        </div>
    )
}
export default SBoxServices; 2