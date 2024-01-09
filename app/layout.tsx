import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/nav/Navbar";
import Sessionprovider from "@/components/session-provider";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL!),
	title: {
		template: "%s | Mkai Blog",
		default: "Mkai Blog",
	},
  description: "Explore a world of captivating stories and insightful articles on our blog. From the latest trends to in-depth analyses, our blog covers a wide range of topics to keep you informed and entertained. Stay updated with our diverse collection of blog posts, written by passionate contributors who share their expertise and unique perspectives.",
  openGraph: {
    title: "Mkai Blog",
    url: process.env.SITE_URL,
    siteName: "Mkai Blog",
    images: "/home.png",
    type: "website",
  },
  keywords: ["mkai blog", "projectpro", "mkaidev"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-7xl mx-auto lg:py-10 space-y-10 p-5 lg:p-0">
            <Navbar />
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <Sessionprovider />
        <Footer />
      </body>
    </html>
  );
}
