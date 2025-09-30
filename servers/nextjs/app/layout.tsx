import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import MixpanelInitializer from "./MixpanelInitializer";
import { LayoutProvider } from "./(presentation-generator)/context/LayoutContext";
import { Toaster } from "@/components/ui/sonner";
const inter = localFont({
  src: [
    {
      path: "./fonts/Inter.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-inter",
});

const instrument_sans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-sans",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://presenton.ai"),
  title: "赠与羽鹿的开源 AI 演示助手",
  description:
    "这是来自 Goat 的礼物——赠与羽鹿的中文化开源 AI 幻灯片生成工具，支持自定义模板、多模型调用，以及一键导出 PPTX 与 PDF。",
  keywords: [
    "赠与羽鹿",
    "Goat",
    "AI 幻灯片",
    "PPT 自动生成",
    "中文演示助手",
    "AI 文案",
    "模板自定义",
    "一键导出 PPT",
  ],
  openGraph: {
    title: "赠与羽鹿的开源 AI 演示助手",
    description:
      "来自 Goat 的礼物：献给羽鹿的中文界面演示工坊，具备模板自定义与多模型支持。",
    url: "https://presenton.ai",
    siteName: "Goat 的赠礼",
    images: [
      {
        url: "https://presenton.ai/presenton-feature-graphics.png",
        width: 1200,
        height: 630,
        alt: "赠与羽鹿的开源 AI 演示助手",
      },
    ],
    type: "website",
    locale: "zh_CN",
  },
  alternates: {
    canonical: "https://presenton.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "赠与羽鹿的开源 AI 演示助手",
    description:
      "全中文 UI，支持多模型与模板定制，这是 Goat 献给羽鹿的演示创作伙伴。",
    images: ["https://presenton.ai/presenton-feature-graphics.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="zh-CN">
      <body
        className={`${inter.variable} ${roboto.variable} ${instrument_sans.variable} antialiased`}
      >
        <Providers>
          <MixpanelInitializer>
            <LayoutProvider>
              {children}
            </LayoutProvider>
          </MixpanelInitializer>
        </Providers>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
