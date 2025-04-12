import { FunctionComponent } from "react";
import { Image } from "@heroui/image";
import { Download } from "./download";

export const HowUseSection: FunctionComponent = ({}) => {
  return (
    <div className="container mx-auto flex flex-col bg-gray p-[100px] pt-[80px] rounded-2xl mt-[50px]">
      <h2 className="text-[32px] xl:text-[40px] font-semibold text-center">
        Сохранение захоронений в{" "}
        <span className="text-primary">несколько кликов</span>
      </h2>

      <div className="flex justify-center items-center group">
        <Image
          alt=""
          radius="none"
          // height={843}
          src="/step1.png"
          className="group-hover:translate-x-5 transition-all w-4/5 xl:w-full"
        />

        <div className="flex flex-col bg-primary p-[40px] xl:p-[60px] rounded-[50px] -ml-[190px] xl:-ml-[140px] pl-[80px] xl:pl-[140px] text-white w-2/3">
          <div className="flex gap-7">
            <div className="rounded-full bg-white min-w-[40px] h-[40px] xl:min-w-[60px] xl:h-[60px] flex items-center justify-center text-primary text-[24px] xl:text-[40px] font-semibold">
              1
            </div>
            <div>
              <h4 className="text-[24px] xl:text-[40px] font-semibold -mt-[6px] xl:-mt-[10px]">
                Перейди на вкладку Захоронения
              </h4>
              <p className="text-[16px] xl:text-[24px] mt-5 xl:mt-[30px]">
                Тут информация список всех сохраненных вами захоронений. Вы
                быстро сможете найти захоронение и найти локацию.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center group -mt-[100px]">
        <div className="flex flex-col bg-primary p-[40px] xl:p-[60px] rounded-[50px] -mr-[190px] xl:-mr-[140px] pr-[150px] xl:pr-[140px] text-white w-2/3">
          <div className="flex gap-7">
            <div className="rounded-full bg-white min-w-[40px] h-[40px] xl:min-w-[60px] xl:h-[60px] flex items-center justify-center text-primary text-[24px] xl:text-[40px] font-semibold">
              2
            </div>
            <div>
              <h4 className="text-[24px] xl:text-[40px] font-semibold -mt-[6px] xl:-mt-[10px]">
                Заполни данные
              </h4>
              <p className="text-[16px] xl:text-[24px] mt-5 xl:mt-[30px]">
                Мы навсегда сохраним для вас всю информацию о захоронении вашего
                родственника. Включая фотографии и точную геолокацию для
                удобного поиска
              </p>
            </div>
          </div>
        </div>

        <Image
          alt=""
          radius="none"
          // height={843}
          // width={"100%"}
          src="/step2.png"
          className="group-hover:-translate-x-5 transition-all w-4/5 xl:w-full"
        />
      </div>

      <div className="flex justify-center items-center group -mt-[100px]">
        <Image
          alt=""
          radius="none"
          // height={843}
          // width={"100%"}
          src="/step3.png"
          className="group-hover:translate-x-5 transition-all w-4/5 xl:w-full"
        />

        <div className="flex flex-col bg-primary p-[40px] xl:p-[60px] rounded-[50px] -ml-[210px] xl:-ml-[140px] pl-[80px] xl:pl-[140px] text-white w-2/3">
          <div className="flex gap-7">
            <div className="rounded-full bg-white min-w-[40px] h-[40px] xl:min-w-[60px] xl:h-[60px] flex items-center justify-center text-primary text-[24px] xl:text-[40px] font-semibold">
              3
            </div>
            <div>
              <h4 className="text-[24px] xl:text-[40px] font-semibold -mt-[6px] xl:-mt-[10px]">
                Оплати размещение
              </h4>
              <p className="text-[16px] xl:text-[24px] mt-5 xl:mt-[30px]">
                Благодаря тому что сервис платный, мы сохраним информацию о
                захоронении ваших родственников <b>навсегда</b>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[30px]">
        <div className="flex items-center p-[25px] px-[50px] bg-white rounded-2xl gap-[50px]">
          <p className="text-[20px] text-primary font-semibold">
            Скачивай для любой платформы
          </p>

          <Download />
        </div>
      </div>
    </div>
  );
};
