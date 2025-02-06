import type { Metadata } from "next";
import { Space_Grotesk, Klee_One } from "next/font/google";
import "../styles/globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});
const kleeOne = Klee_One({
  variable: "--font-klee-one",
  weight: ["400", "600"]
})

export const metadata: Metadata = {
  title: "Japanese Learning Resource",
  description: "Japanese Learning Resource",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${kleeOne.variable} antialiased`}
      >
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
