import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold mb-12">
          CONTACT
        </h3>

        {/* 横向分布信息 */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 sm:gap-0 text-center sm:text-left">
          {/* 地址 */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="flex items-center gap-2">
              <MapPin className="text-primary w-5 h-5" />
              <h4 className="font-semibold text-lg">Address</h4>
            </div>
            <p>123 Street Name, City, Country</p>
          </div>

 {/* 工作时间 */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="flex items-center gap-2">
              <Clock className="text-primary w-5 h-5" />
              <h4 className="font-semibold text-lg">Working Time</h4>
            </div>
            <p>Monday - Friday: 8am - 5pm</p>
          </div>

          {/* 电话 */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="flex items-center gap-2">
              <Phone className="text-primary w-5 h-5" />
              <h4 className="font-semibold text-lg">Call Us</h4>
            </div>
            <p>+84 989 366 643</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="flex items-center gap-2">
              <Mail className="text-primary w-5 h-5" />
              <h4 className="font-semibold text-lg">Email</h4>
            </div>
            <p>info@example.com</p>
          </div>

         
         
        </div>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
