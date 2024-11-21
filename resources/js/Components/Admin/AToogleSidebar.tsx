import { ChevronLeft } from 'lucide-react';
import { useSidebar } from '../ui/sidebar'
import { Button } from '../ui/button';

const AToogleSidebar = () => {
    const {
        state,
        open,
        setOpen,
        openMobile,
        setOpenMobile,
        isMobile,
        toggleSidebar,
    } = useSidebar();

    return (
        <div className="absolute top-[12px] z-20">
            <Button
                onClick={toggleSidebar}
                className="rounded-full w-8 h-8"
                variant="outline"
                size="icon"
            >
                <ChevronLeft
                    className={`h-4 w-4 transition-transform ease-in-out duration-700 ${open ? "rotate-0" : "-rotate-180"}`}
                />
            </Button>
        </div>
    )
}

export default AToogleSidebar;