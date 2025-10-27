import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  description: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "/images/team1.jpg",
    name: "MR. DƯƠNG BÁ HẢI",
    position: "HR Consultant - Facilitator - Coach",
    description:
      "Hải có hơn 20 năm kinh nghiệm trong phát triển tổ chức và cải tiến doanh nghiệp tại các tập đoàn đa quốc gia Mỹ, Nhật, Hàn, Úc và Đức. Với đam mê và tinh thần cam kết, anh đồng hành cùng khách hàng trong vai trò giảng viên, tư vấn và khai vấn — mang đến năng lượng nhiệt thành, thực tiễn và truyền cảm hứng phát triển bền vững.",
  },
  {
    imageUrl: "/images/team2.jpg",
    name: "Ms. Huỳnh Hà Kỳ An",
    position: "Learning Partner",
    description:
      "Đặt lịch tư vấn miễn phí để thảo luận về nhu cầu và thách thức cụ thể của bạn.",
  },
  {
    imageUrl: "/images/team3.jpg",
    name: "Ms. Lương Quỳnh Như",
    position: "Learning Partner",
    description:
      "Trao đổi để khám phá giải pháp phù hợp và định hướng phát triển cho doanh nghiệp bạn.",
  },
];

export const Team = () => {
  return (
    <section id="team" className="container py-24 sm:py-32">
      {/* 标题居中 */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        TEAM
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-center">
        {/* 上方大卡 */}
        <div className="lg:col-span-2 flex justify-center">
          <Card className="flex flex-col justify-center items-center bg-transparent border-0 shadow-none max-w-5xl">
            <CardHeader className="flex flex-col justify-center items-center pb-1">
              {/* ✅ 改成圆形头像 */}
              <div className="w-[150px] h-[150px] rounded-full overflow-hidden flex justify-center items-center shadow-md">
                <Image
                  src={teamList[0].imageUrl}
                  alt={`${teamList[0].name} ${teamList[0].position}`}
                  width={150}
                  height={150}
                  className="object-cover w-full h-full"
                />
              </div>

              <CardTitle className="text-center mt-4">
                {teamList[0].name}
              </CardTitle>
              <CardDescription className="text-primary text-center">
                {teamList[0].position}
              </CardDescription>
            </CardHeader>

            <CardContent className="text-center pb-6 px-6">
              <p>{teamList[0].description}</p>
            </CardContent>
          </Card>
        </div>

        {/* 下方两张卡 */}
        {teamList.slice(1).map(
          ({ imageUrl, name, position, description }: TeamProps) => (
            <div key={name} className="flex justify-center">
              <Card className="flex flex-col sm:flex-row items-center bg-transparent border-0 shadow-none w-full max-w-[400px]">
                {/* 左侧头像 */}
                <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4 flex justify-center">
                  <div className="w-[90px] h-[90px] rounded-full overflow-hidden flex justify-center items-center shadow-md">
                    <Image
                      src={imageUrl}
                      alt={`${name} ${position}`}
                      width={90}
                      height={90}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                {/* 右侧文字部分 */}
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <CardHeader className="p-0">
                    <CardTitle className="text-base font-semibold">
                      {name}
                    </CardTitle>
                    <CardDescription className="text-primary">
                      {position}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0 mt-3">
                    <p className="text-sm">{description}</p>
                  </CardContent>
                </div>
              </Card>
            </div>
          )
        )}
      </div>
    </section>
  );
};
