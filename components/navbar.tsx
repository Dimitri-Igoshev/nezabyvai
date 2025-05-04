"use client";

import { useRouter } from "next/navigation";
import { Image } from "@heroui/image";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { cn } from "@heroui/theme";
import { useDisclosure } from "@heroui/react";
import { useTheme } from "next-themes";

import { SearchModal } from "./search-modal";

import { ROUTES } from "@/app/routes";

export const Navbar = () => {
  const router = useRouter();

  const { theme, setTheme } = useTheme();
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    setTheme("light");
  }, []);

  const {
    isOpen: isSearch,
    onOpen: onSearch,
    onOpenChange: onSearchChange,
  } = useDisclosure();

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
          "w-full p-6 rounded-b-2xl flex justify-between items-center bg-white fixed z-50",
        )}
      >
        <Image
          alt=""
          className="cursor-pointer"
          height={30}
          radius="none"
          src="/nz-logo.png"
          width={139}
          onClick={() => router.push(ROUTES.HOME)}
        />

        <div className="hidden lg:flex items-center gap-10 text-sm pr-3">
          <button
            className="cursor-pointer hover:text-primary"
            onClick={onSearch}
          >
            Поиск
          </button>
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

      <div>
        {mobileMenu ? (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-white min-h-screen w-full p-8 pt-[100px] flex flex-col gap-8 text-lg">
            <button
              className="cursor-pointer hover:text-primary text-left self-start"
              onClick={onSearch}
            >
              Поиск
            </button>
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
      </div>

      <SearchModal isOpen={isSearch} onOpenChange={onSearchChange} />
    </>
  );
};
