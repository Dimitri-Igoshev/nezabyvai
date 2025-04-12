'use client'

import { useRouter } from "next/navigation";
import { Image } from "@heroui/image";

import { ROUTES } from "@/app/routes";

export const Navbar = () => {
  const router = useRouter();

  return (
    <div className="w-full p-6 rounded-b-2xl flex justify-between items-center bg-white fixed z-50">
      <Image
        alt=""
        radius="none"
        height={30}
        width={139}
        src="/nz-logo.png"
        className="cursor-pointer"
        onClick={() => router.push(ROUTES.HOME)}
      />

      <div className="flex items-center gap-10 text-sm pr-3">
        <div className="cursor-pointer hover:text-primary">Поиск</div>
        <div className="cursor-pointer hover:text-primary">Мемориалы памяти</div>
        <div className="cursor-pointer hover:text-primary">Скачать приложение</div>
        <div className="cursor-pointer hover:text-primary">Как пользоваться</div>
        <div className="cursor-pointer hover:text-primary">Добавить захоронение</div>
      </div>
    </div>
  );
};
