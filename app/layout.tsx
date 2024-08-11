import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

import SmoothScroll from "@/components/layout/smooth-scroll";

import {
  commisionSidebar,
  contactSidebar,
  defaultSidebar,
} from "@/lib/nav-link";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import Divider from "@/components/ui/divider";

export const metadata: Metadata = {
  title: "vereoreo - portfolio",
  description: "Graphic design portfolio by vereoreo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(manrope.className, "bg-background")}>
        <NextTopLoader color="#dedede" />
        <SmoothScroll>
          <div className="flex min-h-screen w-full">
            <aside className="fixed inset-y-0 left-0 z-10 hidden py-[40px] border-border/30 flex-col w-48 border-r lg:flex">
              <nav className="overflow-auto">
                <ul className="grid gap-y-[20px] pl-[30px] pt-0 pb-[40px] text-[20px] font-medium">
                  <li>
                    <Link href={"/"}>
                      <Image
                        src={"/logo.svg"}
                        alt="logo"
                        width={38}
                        height={38}
                      />
                    </Link>
                  </li>
                  <div className="grid gap-[12px]">
                    {defaultSidebar.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="hover:text-muted transition-all"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                </ul>
                <Divider />
                <ul className="grid gap-y-[12px] py-[32px] pl-[30px]">
                  <li className="text-muted text-[12px] font-inter uppercase tracking-[2px]">
                    commision
                  </li>
                  <div className="grid gap-[6px]">
                    {commisionSidebar.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="hover:text-muted transition-all text-[14px]"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                </ul>
                <Divider />
                <ul className="grid gap-y-[12px] py-[32px] pl-[30px]">
                  <li className="text-muted text-[12px] font-inter uppercase tracking-[2px]">
                    contact me
                  </li>
                  <div className="grid gap-[6px]">
                    {contactSidebar.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          target="_blank"
                          className="hover:text-muted transition-all text-[14px]"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                </ul>
              </nav>
            </aside>
            <div className="lg:ml-48 px-[15px] md:px-[30px] w-full pt-[40px]">
              {children}
            </div>
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
