import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Task Manager",
  description: "A task management application",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-900">
        {/* The Header */}
        <header className="w-full bg-blue-600 shadow-sm border-b border-gray-200 px-6 py-4 flex justify-center items-center">
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Task Manager
          </h1>
        </header>

        {/* The main content */}
        <main className="flex-1 bg-red-500 w-full max-w-7xl mx-auto p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
