"use client";

import { FC } from "react";
import { cn } from "@heroui/theme";
import { Image } from "@heroui/image";
import { format } from "date-fns";

interface BuralCardProps {
  item: any;
  className?: string;
  onClick?: () => void;
}

const BuralCard: FC<BuralCardProps> = ({ item, className, onClick }) => {
  return (
    <button
      className={cn(
        "bg-white rounded-[16px] p-2.5 flex flex-col sm:flex-row gap-5 group cursor-pointer relative text-left",
        className,
      )}
      onClick={onClick}
    >
      <Image
        alt=""
        className="saturate-0 group-hover:saturate-100 transition-all w-full sm:w-[100px] h-full sm:h-[100px] sm:mx-1"
        // height={80}
        src={`https://nazabyvai.ru/kek/files/get?uuid=${item.photos[0]}`}
        // width={80}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 w-full mx-3 sm:mx-0">
        <div className="flex flex-col justify-center">
          <p className="text-[20px] font-semibold group-hover:text-primary">{`${item?.d_surname ? item.d_surname + " " : ""}${item?.d_name ? item.d_name + " " : ""}${item?.d_second_name ? item.d_second_name + " " : ""}`}</p>
          <p className="group-hover:text-primary">{`${format(new Date(item.birthday), "dd.MM.yyyy")} - ${format(new Date(item.deathday), "dd.MM.yyyy")}`}</p>
        </div>

        <div className="flex flex-col justify-center mt-3 sm:mt-0">
          <p className="text-[20px] group-hover:text-primary capitalize">
            {item.geo_description}
          </p>
          <p className="font-semibold group-hover:text-primary">{`${item.point.latitude}, ${item.point.longitude}`}</p>
        </div>
      </div>

      <button
        className="absolute right-4 bottom-4"
        onClick={() =>
          window.open(
            `https://maps.yandex.ru/?text=${item.point.latitude}+${item.point.longitude}`,
            "_blank",
          )
        }
      >
        <Image
          alt=""
          className="object-cover cursor-pointer min-w-[30px] saturate-0 group-hover:saturate-100"
          height={30}
          radius="full"
          src="/route.svg"
          width={30}
        />
      </button>
    </button>
  );
};

export default BuralCard;
