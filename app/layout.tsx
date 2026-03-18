import type { Metadata } from "next";
import localFont from "next/font/local";
import { ViewTransitions } from "next-view-transitions";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";


const IvarHeadline = localFont({
  variable: "--font-ivar-headline",
  src: [
    {
      path: '../public/fonts/IvarHeadline-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/IvarHeadline-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/IvarHeadline-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
})

const SoehneWeb = localFont({
  variable: "--font-soehne-web",
  src: [
    {
      path: '../public/fonts/soehne-web-extraleicht.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/soehne-web-extraleicht-kursiv.woff2',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../public/fonts/soehne-web-leicht.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/soehne-web-leicht-kursiv.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/soehne-web-buch.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/soehne-web-buch-kursiv.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/soehne-web-kraftig.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/soehne-web-kraftig-kursiv.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/soehne-web-halbfett.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/soehne-web-halbfett-kursiv.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../public/fonts/soehne-web-dreiviertelfett.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/soehne-web-dreiviertelfett-kursiv.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/fonts/soehne-web-fett.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/soehne-web-fett-kursiv.woff2',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../public/fonts/soehne-web-extrafett.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/soehne-web-extrafett-kursiv.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
})

const SoehneMono = localFont({
  variable: "--font-soehne-mono",
  src: [
    {
      path: '../public/fonts/soehne-mono-buch.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: "BetterUp Uplift",
  description: "BetterUp Uplift",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" style={{ overscrollBehavior: "none" }}>
        <body
          className={`${IvarHeadline.variable} ${SoehneWeb.variable} ${SoehneMono.variable} antialiased`}
        >
          {children}
        </body>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
      </html>
    </ViewTransitions>
  );
}
