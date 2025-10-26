"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FeatureProps {
  image: string;
  title: string;
  description: string;
}

// 三个产品类别对应的案例
const productData: Record<string, FeatureProps[]> = {
  "INHOUSE TRAINING": [
    {
      image: "/images/in1.jpg",
      title: "GÓI KỸ NĂNG LÀM VIỆC CÁ NHÂN",
      description:
        "Customized training programs to enhance leadership and communication skills.",
    },
    {
      image: "/images/in2.jpg",
      title: "GÓI KỸ NĂNG LÀM VIỆC ĐỘI NHÓM",
      description:
        "Hands-on sessions focused on team collaboration and problem solving.",
    },
    {
      image: "/images/in3.jpg",
      title: "GÓI KỸ NĂNG QUẢN LÝ & LÃNH ĐẠO",
      description:
        "Engaging workshops that strengthen teamwork and morale across departments.",
    },
    {
      image: "/images/in4.jpg",
      title: "GÓI TƯ DUY & CHIẾN LƯỢC",
      description:
        "Engaging workshops that strengthen teamwork and morale across departments.",
    },
    {
      image: "/images/in5.jpg",
      title: "GÓI KỸ NĂNG NHÂN SỰ",
      description:
        "Engaging workshops that strengthen teamwork and morale across departments.",
    }
  ],
  CONSULTING: [
    {
      image: "/images/con1.jpg",
      title: "GÓI THIẾT KẾ TỔ CHỨC",
      description:
        "Helping organizations develop clear roadmaps and strategic growth plans.",
    },
    {
      image: "/images/con2.jpg",
      title: "GÓI THIẾT KẾ KHUNG NĂNG LỰC",
      description:
        "Optimizing HR processes to align with organizational goals.",
    },
    {
      image: "/images/con3.jpg",
      title: "GÓI QUẢN TRỊ HIỆU QUẢ CÔNG VIỆC",
      description:
        "Improving workflows and decision-making with tailored solutions.",
    },
    {
      image: "/images/con4.jpg",
      title: "GÓI QUẢN TRỊ HIỆU QUẢ CÔNG VIỆC",
      description:
        "Improving workflows and decision-making with tailored solutions.",
    },
  ],
  "HR SERVICE": [
    {
      image: "/images/h1.jpg",
      title: "COACHING 1-1",
      description: "là chương trình đồng hành cá nhân, được thiết kế dành cho các lãnh đạo, quản lý và những nhân sự tiềm năng thăng tiến trong tương lai (hi-potential) muốn nâng cao hiệu suất lãnh đạo, khả năng ra quyết định, quản trị thay đổi và phát triển sự nghiệp một cách bền vững tại tổ chức.",
    },
    {
      image: "/images/h2.jpg",
      title: "DỊCH VỤ NHÂN SỰ CHO NHỮNG DOANH NGHIỆP SME",
      description:
        "Cung cấp dịch vụ trưởng phòng nhân sự cho các doanh nghiệp nhỏ là một mô hình hợp tác trong đó một chuyên gia IKIGAI ở vai trò “Trưởng phòng nhân sự” đảm nhận toàn bộ hoặc một phần chức năng quản trị nguồn nhân lực cho doanh nghiệp quy mô nhỏ.",
    }
  ],
};

export const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof productData>(
    "INHOUSE TRAINING"
  );

  return (
    <section id="products" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Products</h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-10 text-xl text-muted-foreground">
        Choose a category to explore our tailored solutions and case examples.
      </p>

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
      {productData[activeTab].map(({ image, title, description }, index) => (
  <Card
    key={`${activeTab}-${index}-${title}`} // ✅ 确保全局唯一
    className="overflow-hidden bg-muted/30 border-none shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.03] cursor-pointer"
  >
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
      <CardTitle className="text-lg font-semibold mt-2">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-muted-foreground text-sm text-left">
      {description}
    </CardContent>
  </Card>
))}


      </div>
    </section>
  );
};
