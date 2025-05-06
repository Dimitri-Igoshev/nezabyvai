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

	const [dateBirth, setDateBirth] = useState<any>();
	const [dateDeath, setDateDeath] = useState<any>();

	const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
		dispatch(
			setSearchQuery(
				`${data.firstName} ${data.lastName} ${data.patronymic}` || ""
			)
		);
		dispatch(
			setSearchBirthday(
				dateBirth?.year
					? `${dateBirth?.year}-${dateBirth?.month < 10 ? "0" + dateBirth.month : dateBirth.month}-${dateBirth?.day < 10 ? "0" + dateBirth.day : dateBirth.day}`
					: ""
			)
		);
		dispatch(
			setSearchDeathday(
				dateDeath?.year
					? `${dateDeath?.year}-${dateDeath?.month < 10 ? "0" + dateDeath.month : dateDeath.month}-${dateDeath?.day < 10 ? "0" + dateDeath.day : dateDeath.day}`
					: ""
			)
		);
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
