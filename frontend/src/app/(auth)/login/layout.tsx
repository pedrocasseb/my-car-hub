import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login - My Car Hub",
    description: "Log in to your My Car Hub account to manage your cars.",
};

export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div>{children}</div>;
}
