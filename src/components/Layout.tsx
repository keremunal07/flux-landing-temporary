import { ReactNode } from "react";
import localFont from "next/font/local";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sfProText = localFont({
  src: [
    {
      path: "../../public/fonts/SFProText/SF-Pro-Text-Ultralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFProText/SF-Pro-Text-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFProText/SF-Pro-Text-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFProText/SF-Pro-Text-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFProText/SF-Pro-Text-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFProText/SF-Pro-Text-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sf-pro-text",
});

const sfProDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/SFpro/SF-Pro-Display-Ultralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFpro/SF-Pro-Display-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFpro/SF-Pro-Display-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFpro/SF-Pro-Display-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFpro/SF-Pro-Display-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFpro/SF-Pro-Display-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/SFpro/SF-Pro-Display-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-sf-pro-display",
});

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`${sfProText.variable} ${sfProDisplay.variable} ${inter.variable} font-sans min-h-screen bg-foreground text-background`}
    >
      <div className="container max-w-[1400px] px-4 mx-auto">{children}</div>
    </div>
  );
}
