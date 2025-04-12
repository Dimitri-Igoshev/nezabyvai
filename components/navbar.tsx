"use client";

import { useRouter } from "next/navigation";
import { Image } from "@heroui/image";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";

import { ROUTES } from "@/app/routes";
import { useEffect, useState } from "react";
import { cn } from "@heroui/theme";

export const Navbar = () => {
  const router = useRouter();

  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenu]);

  return (
    <>
      <div
        className={cn(
          "w-full p-6 rounded-b-2xl flex justify-between items-center bg-white fixed z-50"
        )}
      >
        <Image
          alt=""
          radius="none"
          height={30}
          width={139}
          src="/nz-logo.png"
          className="cursor-pointer"
          onClick={() => router.push(ROUTES.HOME)}
        />

        <div className="hidden lg:flex items-center gap-10 text-sm pr-3">
          <div className="cursor-pointer hover:text-primary">Поиск</div>
          <div className="cursor-pointer hover:text-primary">
            Мемориалы памяти
          </div>
          <div className="cursor-pointer hover:text-primary">
            Скачать приложение
          </div>
          <div className="cursor-pointer hover:text-primary">
            Как пользоваться
          </div>
          <div className="cursor-pointer hover:text-primary">
            Добавить захоронение
          </div>
        </div>

        {!mobileMenu ? (
          <HiOutlineBars3
            className="flex lg:hidden cursor-pointer"
            size={30}
            onClick={() => setMobileMenu(true)}
          />
        ) : (
          <IoCloseOutline
            className="flex lg:hidden cursor-pointer"
            size={30}
            onClick={() => setMobileMenu(false)}
          />
        )}
      </div>

      {mobileMenu ? (
        <div className="bg-white min-h-screen h-full w-full p-8 pt-[100px] flex flex-col gap-8 text-lg">
          <div className="cursor-pointer hover:text-primary">Поиск</div>
          <div className="cursor-pointer hover:text-primary">
            Мемориалы памяти
          </div>
          <div className="cursor-pointer hover:text-primary">
            Скачать приложение
          </div>
          <div className="cursor-pointer hover:text-primary">
            Как пользоваться
          </div>
          <div className="cursor-pointer hover:text-primary">
            Добавить захоронение
          </div>
        </div>
      ) : null}
    </>
  );
};
