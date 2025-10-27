import Image from "next/image";

export const Customer = () => {
  // 生成照片列表 p1.jpg - p18.jpg
  const images = Array.from({ length: 18 }, (_, i) => `/images/customer/p${i + 1}.jpg`);

  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        CUSTOMER
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={src}
              alt={`Customer ${index + 1}`}
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
