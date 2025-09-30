import React from "react";

import UploadPage from "./components/UploadPage";
import Header from "@/app/(presentation-generator)/dashboard/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "赠与羽鹿的 AI 演示助手",
  description:
    "赠与羽鹿的中文化开源 AI 幻灯片生成器，支持自定义模板、多模型调用（OpenAI、Gemini、Ollama），一键导出 PPTX/PDF。",
  alternates: {
    canonical: "https://presenton.ai/create",
  },
  keywords: [
    "AI 幻灯片",
    "赠与羽鹿",
    "自动生成演示",
    "中文演示助手",
    "模板自定义",
    "商业演示",
    "会议汇报",
    "PPTX 导出",
    "PDF 导出",
  ],
  openGraph: {
    title: "赠与羽鹿的 AI 演示助手",
    description:
      "开源中文 AI 演示助手，支持自定义模板、多模型调用以及 PPTX/PDF 导出。",
    type: "website",
    url: "https://presenton.ai/create",
    siteName: "赠与羽鹿的演示助手",
  },
  twitter: {
    card: "summary_large_image",
    title: "赠与羽鹿的 AI 演示助手",
    description:
      "Goat 赠与羽鹿的开源 AI 幻灯片生成器，中文界面、多模型支持。",
    site: "@goat_studio",
    creator: "@goat_studio",
  },
};

const page = () => {
  return (
    <div className="relative">
      <Header />
      <div className="flex flex-col items-center justify-center  py-8">
        <h1 className="text-3xl font-semibold font-instrument_sans">
          创建演示文稿
        </h1>
        {/* <p className='text-sm text-gray-500'>We will generate a presentation for you</p> */}
      </div>

      <UploadPage />
    </div>
  );
};

export default page;
