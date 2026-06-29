import { Montserrat } from "next/font/google";
import "./globals.css";
import AOSInitializer from "@/components/ui/AOSInitializer";
import "aos/dist/aos.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
});

export const metadata = {
  title: "Celeste OC | Portfolio",
  description:
    "Full Stack Developer specializing in React, Next.js, Laravel, and modern web technologies. Explore my projects and experience.",
  openGraph: {
    title: "Celeste OC | Portfolio",
    description:
      "Full Stack Developer specializing in React, Next.js, Laravel, and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.className} antialiased`}>
        <div className="bg-gradient-animated" aria-hidden="true" />
        <AOSInitializer />
        {children}
      </body>
    </html>
  );
}
