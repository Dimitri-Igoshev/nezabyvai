import { RunningLineCard } from "@/components/running-line-card";
import { HowUseSection } from "@/components/how-use";
import { Image } from "@heroui/image";
import Marquee from "react-fast-marquee";
import { Download } from "@/components/download";

export default function Home() {
  return (
    <div className="">
      <Image
        alt=""
        radius="none"
        width={"100%"}
        src="/nz-bg.png"
        className="object-fill w-full absolute -top-[80px] left-0 right-0 h-[800px]"
      />

      <div className="container mx-auto flex flex-col mt-[80px] relative z-10">
        <h1 className="text-[40px] font-semibold text-white w-[630px] leading-[40px] mt-[150px]">
          Единая база захоронений в России и в странах СНГ
        </h1>

        <div className="relative bg-white w-full py-6 px-[50px] rounded-2xl flex items-center justify-between mt-[150px] group">
          <p className="w-[470px]">
            Скачай приложение и надежно сохрани точное место захоронения
            близкого вам человека –{" "}
            <b className="group-hover:text-primary transition-all">НАВСЕГДА</b>
          </p>

          <div className="object-cover absolute -bottom-[50px] right-[180px]">
            <Image
              alt=""
              radius="none"
              height={393}
              width={300}
              src="/iphone.png"
              className="hover:translate-x-3 transition-all"
            />
          </div>

          <Download />
        </div>
      </div>

      <div className="mt-[40px] flex gap-5 w-full relative z-10">
        <Marquee className="w-full h-full pt-[60px] -mb-10 pb-10" pauseOnHover>
          <div className="gap-6 -mx-[0px] grid grid-cols-12 pl-6">
            {[...new Array(12)].map((item: any, idx: number) => (
              <RunningLineCard
                key={idx}
                className="w-[300px] cursor-pointer hover:scale-110 transition-all"
              />
            ))}
          </div>
        </Marquee>
      </div>

      <HowUseSection />
    </div>
  );
}
