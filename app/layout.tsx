import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "毛茸小屋宠物洗护店",
  description: "宠物洗澡、造型修剪、皮毛护理预约页面"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
