import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Register - My Car Hub",
    description: "Create a new account on My Car Hub to manage your cars.",
};

export default function RegisterLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div>{children}</div>;
}
