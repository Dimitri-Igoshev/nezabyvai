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

import { useGetTombsMutation } from "@/redux/services/buralApi";

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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<Inputs>();
  const [isLoading, setIsLoading] = useState(false);
  const [dateBirth, setDateBirth] = useState();
  const [dateDeath, setDateDeath] = useState();

  const [get] = useGetTombsMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);

    const body: any = {};

    body.query = `${data.firstName} ${data.lastName}`;
    body.birthday = dateBirth;
    body.deathday = dateDeath;

    get(body)
      .unwrap()
      .then((res) => {
        console.log(res);
      })
      .catch((error: any) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
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
                  isLoading={isLoading}
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
