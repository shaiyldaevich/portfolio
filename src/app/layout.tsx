import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Layout from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smk.dev | Front-end Developer",
  description:
    "Looking for an experienced web developer? Have a look at the portfolio of Salamalik Shaiyldaevich - Frontend developer. Here you will find information about my projects and skills that may be useful to you in the future!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-YWGF0KWEGD"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YWGF0KWEGD');
            `,
        }}
      />
    </html>
  );
}
