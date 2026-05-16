import type { Metadata } from "next";
import Logo from "../../public/logo.png";
import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";

export const metadata: Metadata = {
    title: "404 - Page Not Found",
    description: "The page you are looking for does not exist.",
};

export default function NotFound() {
    return (
        <div className="mx-auto w-[95%] sm:w-[90%] lg:w-[85%] xl:w-300 flex justify-center h-screen -mt-30 bg-[#07080A]  flex-col px-6 sm:px-8 gap-4">
            <BackgroundBeams className="opacity-40" />
            <Image src={Logo} alt="My Car Hub" className="w-12 mb-6 mt-20" />
            <h2 className="text-xl text-foreground/40 font-semibold">
                404 Error
            </h2>
            <h1 className="text-4xl font-semibold">Page Not Found</h1>
            <p className="text-foreground/40">
                The page you are looking for could not be found.
            </p>
        </div>
    );
}
