"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FeatureProps {
  image: string;
  title: string;
  description?: string;
}

// 三个产品类别对应的案例
const productData: Record<string, FeatureProps[]> = {
  "INHOUSE TRAINING": [
    { image: "/images/in1.jpg", title: "GÓI KỸ NĂNG LÀM VIỆC CÁ NHÂN" },
    { image: "/images/in2.jpg", title: "GÓI KỸ NĂNG LÀM VIỆC ĐỘI NHÓM" },
    { image: "/images/in3.jpg", title: "GÓI KỸ NĂNG QUẢN LÝ & LÃNH ĐẠO" },
    { image: "/images/in4.jpg", title: "GÓI TƯ DUY & CHIẾN LƯỢC" },
    { image: "/images/in5.jpg", title: "GÓI KỸ NĂNG NHÂN SỰ" },
  ],
  CONSULTING: [
    { image: "/images/con1.jpg", title: "GÓI THIẾT KẾ TỔ CHỨC" },
    { image: "/images/con2.jpg", title: "GÓI THIẾT KẾ KHUNG NĂNG LỰC" },
    { image: "/images/con3.jpg", title: "GÓI QUẢN TRỊ HIỆU QUẢ CÔNG VIỆC" },
    { image: "/images/con4.jpg", title: "GÓI QUẢN TRỊ HIỆU QUẢ CÔNG VIỆC" },
  ],
  "HR SERVICE": [
    {
      image: "/images/h1.jpg",
      title: "COACHING 1-1",
      description:
        "Là chương trình đồng hành cá nhân, được thiết kế dành cho các lãnh đạo, quản lý và những nhân sự tiềm năng thăng tiến trong tương lai (hi-potential) muốn nâng cao hiệu suất lãnh đạo, khả năng ra quyết định, quản trị thay đổi và phát triển sự nghiệp một cách bền vững tại tổ chức.",
    },
    {
      image: "/images/h2.jpg",
      title: "DỊCH VỤ NHÂN SỰ CHO NHỮNG DOANH NGHIỆP SME",
      description:
        "Cung cấp dịch vụ trưởng phòng nhân sự cho các doanh nghiệp nhỏ là một mô hình hợp tác trong đó một chuyên gia IKIGAI ở vai trò “Trưởng phòng nhân sự” đảm nhận toàn bộ hoặc một phần chức năng quản trị nguồn nhân lực cho doanh nghiệp quy mô nhỏ.",
    },
  ],
};

export const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof productData>(
    "INHOUSE TRAINING"
  );

  return (
    <section id="products" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">PRODUCTS</h2>

      {/* 切换按钮 */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {Object.keys(productData).map((tab) => (
          <Button
            key={tab}
            variant={activeTab === tab ? "default" : "outline"}
            onClick={() => setActiveTab(tab as keyof typeof productData)}
            className="text-sm md:text-base px-5 py-2 transition-all"
          >
            {tab}
          </Button>
        ))}
      </div>

      {/* 动态卡片内容 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {productData[activeTab].map(({ image, title, description }, index) => {
          const isHRService = activeTab === "HR SERVICE";

          return (
            <Card
              key={`${activeTab}-${index}-${title}`}
              className={`overflow-hidden border-none shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.03] cursor-pointer 
                ${isHRService ? "bg-blue-50 text-left flex flex-col" : "bg-muted/30"}`}
            >
              {isHRService ? (
                // HR SERVICE 样式：标题 + 描述 + 图片
                <>
                  <CardHeader className="">
                    <CardTitle className="text-xl font-semibold">
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                  </CardContent>
                  <div className="relative w-full h-64">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </>
              ) : (
                // 其他类别样式：图片 + 标题 + 描述
                <>
                  <div className="relative w-full h-56">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <CardHeader className="text-left">
                    <CardTitle className="text-lg font-semibold mt-2">
                      {title}
                    </CardTitle>
                  </CardHeader>
                  {description && (
                    <CardContent className="text-muted-foreground text-sm text-left">
                      {description}
                    </CardContent>
                  )}
                </>
              )}
            </Card>
          );
        })}
      </div>
    </section>
  );
};
