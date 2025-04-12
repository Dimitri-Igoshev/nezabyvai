import Link from "next/link";
import { EmailIcon, PhoneIcon, TelegramIcon, WhatsAppIcon } from "./icons";

export const Footer = () => {
  return (
    <div className="mt-[50px]">
      <div className="container mx-auto grid grid-cols-3 px-5 gap-[100px]">
        <div className="col-span-2 flex flex-col gap-[20px]">
          <p className="font-semibold">Ссылки</p>

          <div className="flex flex-wrap gap-2">
            <Link href="#" className="hover:text-primary hover:underline mr-3">
              Поиск
            </Link>
            <Link href="#" className="hover:text-primary hover:underline mr-3">
              Скачать приложение
            </Link>
            <Link href="#" className="hover:text-primary hover:underline mr-3">
              Как пользоваться
            </Link>
            <Link href="#" className="hover:text-primary hover:underline mr-3">
              Добавить захоронение
            </Link>
            <Link href="#" className="hover:text-primary hover:underline mr-3">
              Политика конфиденциальности
            </Link>
            <Link href="#" className="hover:text-primary hover:underline mr-3">
              Пользовательское соглашение
            </Link>
          </div>
        </div>

        <div className="col-span-1 flex flex-col gap-[20px]">
          <p className="font-semibold">Контакты</p>

          <div className="flex items-center gap-4">
            <div className="cursor-pointer group">
              <PhoneIcon
                fill="#666666"
                className="cursor-pointer block group-hover:hidden"
              />
              <PhoneIcon
                fill="#00BFFF"
                className="cursor-pointer hidden group-hover:block"
              />
            </div>

            <div className="cursor-pointer group">
              <TelegramIcon
                fill="#666666"
                className="cursor-pointer block group-hover:hidden"
              />
              <TelegramIcon
                fill="#00BFFF"
                className="cursor-pointer hidden group-hover:block"
              />
            </div>

            <div className="cursor-pointer group">
              <WhatsAppIcon
                fill="#666666"
                className="cursor-pointer block group-hover:hidden"
              />
              <WhatsAppIcon
                fill="#00BFFF"
                className="cursor-pointer hidden group-hover:block"
              />
            </div>

            <div className="cursor-pointer group">
              <EmailIcon
                fill="#666666"
                className="cursor-pointer block group-hover:hidden"
              />
              <EmailIcon
                fill="#00BFFF"
                className="cursor-pointer hidden group-hover:block"
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
