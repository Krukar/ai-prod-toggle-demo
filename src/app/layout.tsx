import type { Metadata } from 'next';
import { Audiowide } from 'next/font/google';
import './globals.css';

const audioWide = Audiowide({
    variable: '--font-audio-wide',
    weight: '400',
});

export const metadata: Metadata = {
    title: 'AI Product Toggle Demo',
    description: 'AI generated product imagery that toggles between night and day',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${audioWide.variable} antialiased`}>{children}</body>
        </html>
    );
}
