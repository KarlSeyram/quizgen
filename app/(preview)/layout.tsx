import "./globals.css";
import { Metadata } from "next";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";
import { Geist } from "next/font/google";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-sdk-preview-pdf-support.vercel.app"),
  title: "PDF To Quiz Generator",
  description: "Generate Quizes with just PDF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.className}`}>
      <body>
        <ThemeProvider attribute="class" enableSystem forcedTheme="dark">
          <Toaster position="top-center" richColors />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
