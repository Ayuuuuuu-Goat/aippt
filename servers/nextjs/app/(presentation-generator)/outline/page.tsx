import React from 'react'
import Header from '@/app/(presentation-generator)/dashboard/components/Header'
import { Metadata } from 'next'
import OutlinePage from './components/OutlinePage'
export const metadata: Metadata = {
  title: "赠与羽鹿的 AI 演示助手",
  description: "在这里调序、补充或编辑每一页内容，准备好后即可生成完整演示文稿。",
  alternates: {
    canonical: "https://presenton.ai/create",
  },
  keywords: [
    "演示大纲",
    "幻灯片编辑",
    "AI 幻灯片",
    "内容整理",
    "模板选择",
  ],
};
const page = () => {
  return (
    <div className='relative min-h-screen'>
      <Header />
      <OutlinePage />
    </div>
  )
}

export default page
