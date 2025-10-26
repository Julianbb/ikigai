import { Button, buttonVariants } from "@/components/ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-16 px-6 md:py-24 md:px-12 overflow-hidden">
      {/* 背景图片层 */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(3px)",
        }}
      ></div>

      {/* 背景遮罩层 */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 内容区域 */}
      <div className="relative z-10 w-full text-center text-white space-y-8">
     

        {/* 副标题 / 公司名 */}
        <h2 className="text-2xl md:text-4xl font-semibold max-w-5xl mx-auto leading-snug">
          WELCOME TO IKIGAI CAPABILITY TRAINING AND CONSULTING COMPANY LIMITED
        </h2>

           {/* 大标题 IKIGAI */}
           <h1 className="text-6xl md:text-8xl font-extrabold tracking-wide drop-shadow-lg">
          IKIGAI
        </h1>

        {/* 介绍文本 */}
        <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
          Tầm nhìn của chúng tôi là kiến tạo nguồn lực thành lợi thế cạnh tranh bền vững.
          <br />
          Sứ mệnh của chúng tôi là biến nguồn lực thành giá trị chiến lược thông qua đào tạo và tư vấn.
        </p>
      </div>
    </section>
  );
};
