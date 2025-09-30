import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";


interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;

}

export function PromptInput({
  value,
  onChange,

}: PromptInputProps) {
  const [showHint, setShowHint] = useState(false);
  const handleChange = (value: string) => {
    setShowHint(value.length > 0);
    onChange(value);
  };
  return (
    <div className="space-y-2">
      <div className="relative">
        <Textarea
          value={value}
          rows={5}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="请描述你想生成的演示内容"
          data-testid="prompt-input"
          className={`py-4 px-5 border-2 font-medium font-instrument_sans text-base min-h-[150px] max-h-[300px] border-[#5146E5] focus-visible:ring-offset-0  focus-visible:ring-[#5146E5] overflow-y-auto  custom_scrollbar  `}
        />
      </div>
      <p
        className={`text-sm text-gray-500 font-inter font-medium ${showHint ? "opacity-100" : "opacity-0"
          }`}
      >
        尽量提供具体需求（主题、风格、重点等），AI 才能生成更贴合的 Goat × 羽鹿 演示稿
      </p>
    </div>
  );
}
