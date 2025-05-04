import { Image } from "@heroui/image";
import Marquee from "react-fast-marquee";

import { RunningLineCard } from "@/components/running-line-card";
import { HowUseSection } from "@/components/how-use";
import { Download } from "@/components/download";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <Image
        alt=""
        className="object-cover w-full absolute -top-[50px] sm:-top-[80px] left-0 right-0 bottom-0 h-[800px]"
        radius="none"
        src="/nz-bg.png"
        width={"100%"}
      />

      <div className="container mx-auto flex flex-col mt-[80px] relative z-10 p-3 sm:p-0">
        <h1 className="text-[32px] z-20 sm:text-[40px] text-center sm:text-left font-semibold text-white sm:w-[630px] leading-[40px] mt-[50px] sm:mt-[150px]">
          Единая база захоронений в России и в странах СНГ
        </h1>

        {/* <div className="object-cover sm:hidden absolute bottom-[40px] left-[25px] justify-center -mt-[180px]">
					<Image
						alt=""
						className="hover:translate-x-3 transition-all"
						height={142}
						radius="none"
						src="/iphone.png"
						width={110}
					/>
				</div> */}

        <div className="relative bg-white w-full py-6 px-6 sm:px-[50px] rounded-2xl flex flex-col sm:flex-row items-center justify-between mt-[50px] sm:mt-[150px] group">
          <p className="sm:w-[470px]">
            Скачай приложение и надежно сохрани точное место захоронения
            близкого вам человека –{" "}
            <b className="group-hover:text-primary transition-all">НАВСЕГДА</b>
          </p>

          <div className="object-cover -bottom-[50px] right-[180px] hidden sm:flex sm:absolute">
            <Image
              alt=""
              className="hover:translate-x-3 transition-all"
              height={393}
              radius="none"
              src="/iphone.png"
              width={300}
            />
          </div>

          <Download className="mt-5" />
        </div>
      </div>

      <div className="mt-0 sm:mt-[40px] flex gap-5 w-full relative z-10">
        <Marquee pauseOnHover className="w-full h-full pt-[60px] -mb-10 pb-10">
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
