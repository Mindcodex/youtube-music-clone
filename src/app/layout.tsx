import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { ToggleProvider } from "@/context/ToggleSideBarContext";
import Topbar from "@/components/Topbar";
import ResponsiveMenu from "@/components/ResponsiveMenu";
import { Player } from "@/components/Player/";
import { SongProvider } from "@/context/SongContext";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "YouTube Music",
  description: "A YouTube Music Clone",
  icons: "/YTMusicLogo.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <SongProvider>
        <ToggleProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black `}
          >
            <div className="absolute w-full h-[3px] sm:bg-gradient-to-r from-[#ff0033] to-[#ff268e] from-80%"></div>
            <Sidebar />
            <Topbar />
            <ResponsiveMenu />
            <Player />
            {children}

          </body>
        </ToggleProvider>
      </SongProvider>
    </html>
  );
}
