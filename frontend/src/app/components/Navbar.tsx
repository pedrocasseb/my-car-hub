"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { ScanFace } from "lucide-react";
import Link from "next/link";
import Logo from "../../../public/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function Navbar() {
    const router = useRouter();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const isLogged = !!localStorage.getItem("token");

    function handleLogout() {
        localStorage.removeItem("token");

        localStorage.removeItem("user");

        router.push("/login");

        router.refresh();
    }

    return (
        <header className="fixed z-50 top-0 left-0 right-0 mt-4 mx-auto w-[95%] sm:w-[90%] lg:w-[85%] xl:w-300 flex items-center justify-between py-4 px-6 sm:px-8 rounded-xl border border-zinc-800/80 bg-transparent backdrop-blur-sm">
            <Link
                href="/"
                className="font-semibold flex items-center gap-2 cursor-pointer"
            >
                <Image src={Logo} alt="My Car Hub" className="w-10" />
                My Car Hub
            </Link>

            <div className="flex items-center gap-6">
                {isLogged ? (
                    <Button onClick={handleLogout} size="lg">
                        Logout
                    </Button>
                ) : (
                    <>
                        <Link
                            className="text-zinc-400 text-sm hover:text-white duration-300"
                            href="/login"
                        >
                            Log in
                        </Link>

                        <Link
                            className={buttonVariants({
                                variant: "default",
                                size: "lg",
                            })}
                            href="/register"
                        >
                            <ScanFace />
                            Register
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
}
