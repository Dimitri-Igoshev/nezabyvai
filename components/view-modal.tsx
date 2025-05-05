"use client";

import { FC } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { format } from "date-fns";
import { Image } from "@heroui/image";

interface ViewModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  current: any;
}

export const ViewModal: FC<ViewModalProps> = ({
  isOpen,
  onOpenChange,
  current,
}) => {
  console.log(current);

  return (
    <Modal
      backdrop="blur"
      className="light py-3"
      classNames={{
        closeButton: "mt-3.5 mr-3.5",
      }}
      isOpen={isOpen}
      placement="top"
      size="3xl"
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <div>
            <ModalHeader className="flex flex-col gap-1 text-[20px] -mt-2.5 text-[#333333]">
              <p>
                {current?.d_surname} {current?.d_name} {current?.d_second_name}
              </p>
              <p className="text-sm text-[#666666] font-medium">{`(${format(new Date(current.birthday), "dd.MM.yyyy")} - ${format(new Date(current.deathday), "dd.MM.yyyy")})`}</p>
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col w-full">
                <div className="">
                  <Image
                    alt=""
                    className="object-cover w-full sm:w-[150px] h-full sm:h-[150px] sm:float-left sm:mr-5"
                    src={`https://nazabyvai.ru/kek/files/get?uuid=${current.photos[0]}`}
                  />
                  <p className="capitalize text-[#666666] my-6 sm:my-0">
                    {current?.description || "Нет описания"}
                  </p>
                </div>

                <p className="font-semibold text-[#666666] my-3">
                  Адрес захоронения
                </p>

                <div className="bg-gray rounded-[12px] p-5 flex flex-col">
                  <div className="flex items-center justify-between">
                    <p className="text-[#666666] capitalize">
                      {current?.geo_description || "Нет информации"}
                    </p>
                    <p className="text-[#666666]">{`${current.point.latitude}, ${current.point.longitude}`}</p>
                  </div>

                  <div className="flex flex-wrap gap-5 mt-3 justify-center sm:justify-between">
                    <div className="flex flex-wrap gap-5">
                      {current?.photos.map((item: string) => (
                        <Image
                          key={item}
                          alt=""
                          className="object-cover w-full sm:w-[80px] h-full sm:h-[80px]"
                          src={`https://nazabyvai.ru/kek/files/get?uuid=${item}`}
                        />
                      ))}
                    </div>
                    <Image
                      alt=""
                      className="object-cover w-full sm:w-[80px] h-full sm:h-[80px]"
                      src={`/qr.png`}
                    />
                  </div>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <div className="flex w-full justify-between items-center flex-wrap">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <Image
                    alt=""
                    className="object-cover w-[30px] h-[30px]"
                    src={`/share.png`}
                  />
                  <p className="font-semibold text-[#666666]">Поделиться</p>
                </div>

                <button
                  className="flex items-center gap-3 group cursor-pointer"
                  onClick={() =>
                    window.open(
                      `https://maps.yandex.ru/?text=${current.point.latitude}+${current.point.longitude}`,
                      "_blank",
                    )
                  }
                >
                  <p className="font-semibold text-[#666666]">
                    Показать на карте
                  </p>
                  <Image
                    alt=""
                    className="object-cover w-[30px] h-[30px]"
                    src={`/route.svg`}
                  />
                </button>
              </div>
            </ModalFooter>
          </div>
        )}
      </ModalContent>
    </Modal>
  );
};
