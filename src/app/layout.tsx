import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import NavbarMobile from "./components/layout/NavbarMobile";
import CTA from "./components/shared/CTA";
const interSans = Inter_Tight({
  variable: "--font-inter-tight-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nama Kamu | Web Developer",
    template: "%s | Nama Kamu",
  },
  description:
    "Portofolio web developer: landing page, company profile, dan custom web.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${interSans.variable} ${interSans.variable} h-full antialiased`}
    >
      <body className="min-h-screen lg:flex">
        <Sidebar />

        <div className="flex-1 flex flex-col bg-black text-white">
          <NavbarMobile />
          <main className="flex-1 mt-20 lg:mt-0 p-4 xl:p-28 xl:pb-14">
            {children}
          </main>
          <CTA />
          <Footer />
        </div>
      </body>
    </html>
  );
}
