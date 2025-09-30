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
  title: "献给羽鹿的开源 AI 演示助手",
  description:
    "赠予羽鹿的开源 AI 幻灯片生成工具，支持多模型选择、模板自定义，以及一键导出 PPTX 与 PDF。",
  keywords: [
    "AI 幻灯片生成",
    "演示文稿",
    "PPT 生成",
    "自动化会议演示",
    "AI 文案",
    "幻灯片模板",
    "一键生成 PPT",
  ],
  openGraph: {
    title: "献给羽鹿的开源 AI 演示助手",
    description:
      "赠予羽鹿的开源 AI 幻灯片生成工具，支持多模型选择、模板自定义，以及一键导出 PPTX 与 PDF。",
    url: "https://presenton.ai",
    siteName: "羽鹿的演示助手",
    images: [
      {
        url: "https://presenton.ai/presenton-feature-graphics.png",
        width: 1200,
        height: 630,
        alt: "羽鹿的演示助手",
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
    title: "献给羽鹿的开源 AI 演示助手",
    description:
      "赠予羽鹿的开源 AI 幻灯片生成工具，支持多模型选择、模板自定义，以及一键导出 PPTX 与 PDF。",
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
