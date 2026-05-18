import Image from "next/image";
import Logo from "../../public/logo.png";

export default function Loading() {
    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center">
            <div className="relative flex items-center justify-center">
                <div className="absolute h-24 w-24 rounded-full bg-[#FF6463]/20 blur-2xl" />

                <div className="relative flex flex-col items-center gap-6">
                    <Image src={Logo} alt="Logo" className="size-14" priority />

                    <div className="h-10 w-10 rounded-full border-2 border-zinc-700 border-t-[#FF6463] animate-spin" />
                </div>
            </div>
        </div>
    );
}
