import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(manrope.className, "bg-background")}>
        <NextTopLoader color="#dedede" />
        <SmoothScroll>
          <div className="flex min-h-screen w-full">
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-48 flex-col border-r border-primary/40 py-[40px] lg:flex">
              <nav className="overflow-auto">
                <ul className="grid gap-y-[20px] pb-[40px] pl-[30px] pt-0 text-[20px] font-medium">
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
                          className="transition-all hover:text-primary/60"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                </ul>
                <Divider />
                <ul className="grid gap-y-[12px] py-[32px] pl-[30px]">
                  <li className="font-inter text-[12px] uppercase tracking-[2px] text-primary/60">
                    commision
                  </li>
                  <div className="grid gap-[6px]">
                    {commisionSidebar.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="text-[14px] transition-all hover:text-primary/60"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                </ul>
                <Divider />
                <ul className="grid gap-y-[12px] py-[32px] pl-[30px]">
                  <li className="font-inter text-[12px] uppercase tracking-[2px] text-primary/60">
                    contact me
                  </li>
                  <div className="grid gap-[6px]">
                    {contactSidebar.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          target="_blank"
                          className="text-[14px] transition-all hover:text-primary/60"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                </ul>
              </nav>
            </aside>
            <div className="w-full px-[15px] pt-[40px] md:px-[30px] lg:ml-48">
              {children}
            </div>
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
