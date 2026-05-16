import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/logo.png";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login - My Car Hub",
    description: "Log in to your My Car Hub account.",
};

export default function Login() {
    return (
        <div className="relative flex items-center justify-center bg-[#07080A] w-full h-screen text-white flex-col overflow-hidden">
            <BackgroundBeams className="opacity-40" />

            <div className="relative z-10 flex flex-col items-center">
                <Image src={Logo} alt="My Car Hub" className="w-14 mb-13" />
                <h1 className="text-2xl font-semibold">Log in My Car Hub</h1>

                <div className="flex flex-col gap-4 min-w-70 mt-10">
                    <Input placeholder="Email Address" />
                    <Input placeholder="Password" />
                    <Button>Send</Button>
                </div>

                <Link
                    href="/register"
                    className={
                        buttonVariants({ variant: "outline" }) +
                        " group min-w-70 mt-10 text-zinc-400 hover:text-white"
                    }
                >
                    Dont have an account? Register
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    );
}
