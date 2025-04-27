import Link from "next/link";

import { EmailIcon, PhoneIcon, TelegramIcon, WhatsAppIcon } from "./icons";

export const Footer = () => {
  return (
    <div className="hidden lg:block mt-[50px]">
      <div className="container mx-auto grid grid-cols-3 px-5 gap-[100px]">
        <div className="col-span-2 flex flex-col gap-[20px]">
          <p className="font-semibold">Ссылки</p>

          <div className="flex flex-wrap gap-2">
            <Link className="hover:text-primary hover:underline mr-3" href="#">
              Поиск
            </Link>
            <Link className="hover:text-primary hover:underline mr-3" href="#">
              Скачать приложение
            </Link>
            <Link className="hover:text-primary hover:underline mr-3" href="#">
              Как пользоваться
            </Link>
            <Link className="hover:text-primary hover:underline mr-3" href="#">
              Добавить захоронение
            </Link>
            <Link className="hover:text-primary hover:underline mr-3" href="#">
              Политика конфиденциальности
            </Link>
            <Link className="hover:text-primary hover:underline mr-3" href="#">
              Пользовательское соглашение
            </Link>
          </div>
        </div>

        <div className="col-span-1 flex flex-col gap-[20px]">
          <p className="font-semibold">Контакты</p>

          <div className="flex items-center gap-4">
            <div className="cursor-pointer group">
              <PhoneIcon
                className="cursor-pointer block group-hover:hidden"
                fill="#666666"
              />
              <PhoneIcon
                className="cursor-pointer hidden group-hover:block"
                fill="#00BFFF"
              />
            </div>

            <div className="cursor-pointer group">
              <TelegramIcon
                className="cursor-pointer block group-hover:hidden"
                fill="#666666"
              />
              <TelegramIcon
                className="cursor-pointer hidden group-hover:block"
                fill="#00BFFF"
              />
            </div>

            <div className="cursor-pointer group">
              <WhatsAppIcon
                className="cursor-pointer block group-hover:hidden"
                fill="#666666"
              />
              <WhatsAppIcon
                className="cursor-pointer hidden group-hover:block"
                fill="#00BFFF"
              />
            </div>

            <div className="cursor-pointer group">
              <EmailIcon
                className="cursor-pointer block group-hover:hidden"
                fill="#666666"
              />
              <EmailIcon
                className="cursor-pointer hidden group-hover:block"
                fill="#00BFFF"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[50px] w-full rounded-t-2xl p-5 flex justify-center bg-[#666666]">
        <p className="text-white">{new Date().getFullYear()} © Не забывай</p>
      </div>
    </div>
  );
};
