import Image from "next/image";

export const About = () => {
  return (
    <section id="home" className="relative w-full min-h-[800px] py-4 sm:py-32">
      {/* 背景图片 */}
      <Image
        src="/images/businesss.jpg"
        alt="Business Background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/30 -z-10" />

      <div className="container mt-40 mx-auto px-6 md:flex md:items-center md:justify-end gap-8 md:gap-12 relative z-10">
        <div className="flex-1 max-w-md md:ml-auto">
          <h2 className="text-3xl md:text-4xl  mb-6">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              BUSINESS
            </span>
           
          </h2>

          <ul className="space-y-4 text-lg md:text-xl font-bold text-black">
            <li>• Chương trình đào tạo may đo theo yêu cầu</li>
            <li>• Tư vấn hệ thống quản trị nguồn lực</li>
            <li>• Coaching</li>
            <li>• Dịch vụ nhân sự cho những doanh nghiệp SME</li>
          </ul>
        </div>

       
      </div>
    </section>
  );
};
