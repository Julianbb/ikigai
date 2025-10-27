import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold mb-12">
          CONTACT
        </h3>

        {/* ✅ 改成等宽网格布局 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">
          
          {/* 地址 */}
          <div className="flex flex-col items-center sm:items-start gap-2 px-4">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <MapPin className="text-primary w-5 h-5" />
              <h4 className="font-semibold text-lg">Address</h4>
            </div>
            <p className="break-words leading-relaxed">
              Văn phòng 1, Tầng 9, Tòa nhà Pearl Plaza, số 561A Điện Biên Phủ, 
              Phường Thạnh Mỹ Tây, TP Hồ Chí Minh, Việt Nam
            </p>
          </div>

          {/* 工作时间 */}
          <div className="flex flex-col items-center sm:items-start gap-2 px-4">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Clock className="text-primary w-5 h-5" />
              <h4 className="font-semibold text-lg">Working Time</h4>
            </div>
            <p className="break-words leading-relaxed">
              Monday - Saturday: 8am - 5pm
            </p>
          </div>

          {/* 电话 */}
          <div className="flex flex-col items-center sm:items-start gap-2 px-4">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Phone className="text-primary w-5 h-5" />
              <h4 className="font-semibold text-lg">Call Us</h4>
            </div>
            <p className="break-words leading-relaxed">+84 989 366 643</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center sm:items-start gap-2 px-4">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Mail className="text-primary w-5 h-5" />
              <h4 className="font-semibold text-lg">Email</h4>
            </div>
            <p className="break-words leading-relaxed">
              info.ikigaihr@gmail.com
            </p>
          </div>
        </div>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
