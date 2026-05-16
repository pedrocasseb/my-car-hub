"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/logo.png";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    async function handleRegister() {
        setUsernameError("");
        setEmailError("");
        setPasswordError("");

        let hasError = false;

        if (!username.trim()) {
            setUsernameError("Username is required");
            hasError = true;
        }

        if (!email.trim()) {
            setEmailError("Email is required");
            hasError = true;
        }

        if (!password.trim()) {
            setPasswordError("Password is required");
            hasError = true;
        }

        if (password.length > 0 && password.length < 6) {
            setPasswordError("Password must contain at least 6 characters");
            hasError = true;
        }

        if (hasError) return;

        try {
            setLoading(true);

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username,
                        email,
                        password,
                    }),
                },
            );

            if (!response.ok) {
                const error = await response.text();

                if (error.includes("Username")) {
                    setUsernameError(error);
                }

                if (error.includes("Email")) {
                    setEmailError(error);
                }

                return;
            }

            const data = await response.json();

            localStorage.setItem("token", data.token);

            localStorage.setItem("user", JSON.stringify(data));

            router.push("/");
            router.refresh();
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="relative flex items-center justify-center bg-[#07080A] w-full h-screen text-white flex-col overflow-hidden">
            <BackgroundBeams className="opacity-40" />

            <div className="relative z-10 flex flex-col items-center">
                <Image src={Logo} alt="My Car Hub" className="w-14 mb-13" />
                <h1 className="text-2xl font-semibold">
                    Register for My Car Hub
                </h1>

                <div className="flex flex-col gap-4 min-w-70 mt-10">
                    <div className="flex flex-col gap-1">
                        <Input
                            placeholder="Username"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        {usernameError && (
                            <p className="text-[#ff6463] text-xs">
                                {usernameError}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col gap-1">
                        <Input
                            placeholder="Email Address"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailError && (
                            <p className="text-[#ff6463] text-xs">
                                {emailError}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col gap-1">
                        <Input
                            placeholder="Password"
                            required
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {passwordError && (
                            <p className="text-[#ff6463] text-xs">
                                {passwordError}
                            </p>
                        )}
                    </div>
                    <Button onClick={handleRegister} disabled={loading}>
                        {loading ? "Sending..." : "Send"}
                    </Button>
                </div>

                <Link
                    href="/login"
                    className={
                        buttonVariants({ variant: "outline" }) +
                        " group min-w-70 mt-10 text-zinc-400 hover:text-white"
                    }
                >
                    Already have an account? Log in
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    );
}
