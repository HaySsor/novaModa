import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { ClientProviders } from "@/context/ClientProviders";

const LatoSans = Lato({
    weight: ['300', '400', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Nova Moda",
    description: "Your favorite clothing store",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl">
        <body className={LatoSans.className}>
        <ClientProviders>
            <div>
                <Header />
                {children}
                {/* <Footer /> */}
            </div>
        </ClientProviders>
        </body>
        </html>
    );
}
