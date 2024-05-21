import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function AuthLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center p-6 sm:pt-0 bg-megb-blue-login">
            <div className="w-full sm:max-w-md mt-6 px-6 py-8 bg-white shadow-md overflow-hidden rounded-lg">
                <div className="flex justify-center mb-8">
                    <Link href="/">
                        <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                    </Link>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}
