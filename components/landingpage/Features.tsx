import Image from "next/image";

export const Features = () => {
  return (
    <section id="case_studies" className="container py-24 sm:py-32 space-y-12">
      {/* 标题 */}
      <h2 className="text-3xl lg:text-4xl font-bold text-center">
        CASE STUDIES
      </h2>

      {/* 图片网格 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          "/images/case1.jpg",
          "/images/case2.jpg",
          "/images/case3.jpg",
          "/images/case4.jpg",
          "/images/case5.jpg",
          "/images/case6.jpg",
        ].map((src, i) => (
          <div
            key={i}
            className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src={src}
              alt={`Case Study ${i + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* 底部描述 */}
      <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
        Quản trị nhân sự kiểu mới – thông minh, linh hoạt, không cồng kềnh.
      </p>
    </section>
  );
};
