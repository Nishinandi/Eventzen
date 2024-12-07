

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from 'next/font/google';
import { Suspense } from 'react'; 
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton} from '@clerk/nextjs'


const poppins = Poppins({
  subsets: ['latin'], // Subsets to include
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Specify the font weights you need
  style: ['normal', 'italic'], // Optional: Include italic styles if needed
  variable: '--font-poppins', // Optional: Use a CSS custom property for the font
});

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
  title: "EventZen",
  description: "EventZen is a platform for event management",
  icons:{
    icon:'/assets/images/logo.svg'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
