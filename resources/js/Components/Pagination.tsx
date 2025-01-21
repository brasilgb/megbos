import React from "react";
import { Link } from "@inertiajs/react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
interface PaginationProps {
    data: any;
}

const Pagination = ({ data }: PaginationProps) => {

    const clearLinks = [...data.links];
    clearLinks.shift();
    clearLinks.pop();

    return (
        <ul className="flex items-center justify-center gap-2">
            <li>
                {data.prev_page_url !== null ? (
                    <Link
                        className="flex items-center jus h-10 w-10 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-600 duration-300 rounded-full"
                        href={data.first_page_url}
                    >
                        <ChevronsLeft size={16} />
                    </Link>
                ) : (
                    <span className="flex items-center jus h-10 w-10 text-sm text-gray-300">
                        <ChevronsLeft size={16} />
                    </span>
                )}
            </li>
            <li>
                {data.prev_page_url !== null ? (
                    <Link
                        className="flex items-center justify-center h-10 w-10 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-600 duration-300 rounded-full"
                        href={data.prev_page_url}
                    >
                        <ChevronLeft size={16} />
                    </Link>
                ) : (
                    <span className="flex items-center justify-center h-10 w-10 text-sm text-gray-300">
                        <ChevronLeft size={16} />
                    </span>
                )}
            </li>

            {clearLinks.map((link: any, idx: number) => (
                <li key={idx}>
                    <Link
                        className={`flex items-center justify-center h-10 w-10 text-sm ${link.active ? "text-gray-50 bg-blue-700 border-2 border-gray-50 shadow" : "text-gray-500 hover:bg-gray-100 hover:text-gray-600"} duration-300 rounded-full`}
                        href={link.url}
                    >
                        {link.label}
                    </Link>
                </li>
            ))}

            <li>
                {data.next_page_url !== null ? (
                    <Link
                        className="flex items-center justify-center h-10 w-10 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-600 duration-300 rounded-full"
                        href={data.next_page_url}
                    >
                        <ChevronRight size={16} />
                    </Link>
                ) : (
                    <span className="flex items-center justify-center h-10 w-10 text-sm text-gray-300 duration-300">
                        <ChevronRight size={16} />
                    </span>
                )}
            </li>
            <li>
                {data.next_page_url !== null ? (
                    <Link
                        className="flex items-center justify-center h-10 w-10 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-600 duration-300 rounded-full"
                        href={data.last_page_url}
                    >
                        <ChevronsRight size={16} />
                    </Link>
                ) : (
                    <span className="flex items-center justify-center h-10 w-10 text-sm text-gray-300 duration-300">
                        <ChevronsRight size={16} />
                    </span>
                )}
            </li>
        </ul>
    );
};

export default Pagination;