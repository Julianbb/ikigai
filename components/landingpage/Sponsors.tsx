import { Radar } from "lucide-react";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <Radar size={34} />,
    name: "Sponsor 1",
  },
  {
    icon: <Radar size={34} />,
    name: "Sponsor 2",
  },
  {
    icon: <Radar size={34} />,
    name: "Sponsor 3",
  },
  {
    icon: <Radar size={34} />,
    name: "Sponsor 4",
  },
  {
    icon: <Radar size={34} />,
    name: "Sponsor 5",
  },
  {
    icon: <Radar size={34} />,
    name: "Sponsor 6",
  },
];

export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="container pt-24 sm:py-24"
    >
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
      IKIGAI không chỉ là khái niệm cổ điển của Nhật Bản, nó còn là một hành trình khám phá bản thân và tối ưu hóa giá trị của Tổ chức. Trong vai trò là công ty đào tạo và tư vấn năng lực, chúng tôi đồng hành với doanh nghiệp để nhận diện và gắn kết bốn yếu tố cốt lõi của IKIGAI.
      </h2>

    </section>
  );
};
