"use client";

import { FC, useState } from "react";
import {
  Button,
  DatePicker,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { I18nProvider } from "@react-aria/i18n";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import {
  setSearchBirthday,
  setSearchDeathday,
  setSearchQuery,
} from "@/redux/features/searchSlice";

type Inputs = {
  firstName: string;
  lastName: string;
  patronymic: string;
};

interface SearcModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

export const SearchModal: FC<SearcModalProps> = ({ isOpen, onOpenChange }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<Inputs>();
  const router = useRouter();

  const [dateBirth, setDateBirth] = useState();
  const [dateDeath, setDateDeath] = useState();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    dispatch(
      setSearchQuery(
        `${data.firstName} ${data.lastName} ${data.patronymic}` || "",
      ),
    );
    dispatch(setSearchBirthday(dateBirth || ""));
    dispatch(setSearchDeathday(dateDeath || ""));
    router.push(`/burals`);
  };

  return (
    <Modal
      backdrop="blur"
      className="light py-3"
      isOpen={isOpen}
      placement="center"
      size="sm"
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader className="flex flex-col gap-1 text-[20px]">
              Поиск захоронения
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between gap-5">
                  <I18nProvider locale="ru-RU">
                    <DatePicker
                      label="Дата рождения"
                      value={dateBirth}
                      //@ts-ignore
                      onChange={setDateBirth}
                    />
                    <DatePicker
                      label="Дата смерти"
                      value={dateDeath}
                      //@ts-ignore
                      onChange={setDateDeath}
                    />
                  </I18nProvider>
                </div>

                <Input
                  className=""
                  defaultValue=""
                  label="Фамилия"
                  placeholder="Иванов"
                  type="text"
                  {...register("lastName")}
                />
                <Input
                  className=""
                  defaultValue=""
                  label="Имя"
                  placeholder="Иван"
                  type="text"
                  {...register("firstName")}
                />
                <Input
                  className=""
                  defaultValue=""
                  label="Отчество"
                  placeholder="Иванович"
                  type="text"
                  {...register("patronymic")}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <div className="flex flex-col w-full">
                <Button
                  className="w-full"
                  color="primary"
                  // isLoading={isLoading}
                  size="lg"
                  type="submit"
                  onPress={() => {
                    onClose();
                  }}
                >
                  Найти захоронение
                </Button>
              </div>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  );
};
