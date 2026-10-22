import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NanoLink-shorten your URL",
  description: "NanoLink helps you to shorten the url as per you choice",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col relative h-full w-full bg-black
[&>div]:absolute [&>div]:inset-0 [&>div]:-z-10
[&>div]:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
[&>div]:bg-[size:14px_24px]">
        
      <Navbar/>

         <main className="flex-1">
                    {children}
                </main>
        
        <Footer/>
        </body>
    </html>
  );
}
