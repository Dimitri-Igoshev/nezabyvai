"use client";

import { useState, useEffect } from "react";

import { useGetTombsMutation } from "@/redux/services/buralApi";
import BuralCard from "@/components/BuralCard";
import { useDispatch, useSelector } from "react-redux";

const BuralsPage = () => {
	const dispatch = useDispatch();
	const search = useSelector((state: any) => state.searchReducer);

	const [query, setQuery] = useState<any>({
		query: search.query || "",
		birthday: search.birthday || "",
		deathday: search.maxage || "",
		limit: 20,
		offset: 0,
	});

	const [burals, setBurals] = useState<any[]>([]);

	const [getTombs] = useGetTombsMutation(search);

	const getBurals = async () => {
		await getTombs(search)
			.unwrap()
			.then((res: any) => {
				if (res?.message?.tombs) {
					setBurals(res.message.tombs);
				} else {
					setBurals([]);
				}
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		setQuery({
			...search,
			query: search.query || "",
			birthday: search.birthday || "",
			deathday: search.maxage || "",
		});

		getBurals();
	}, []);

	return (
		<div className="min-h-screen">
			<div className="mx-auto container flex flex-col bg-gray rounded-2xl mt-[100px] p-6">
				<h2 className="text-[32px] xl:text-[40px] font-semibold text-[#666]">
					Результаты поиска
				</h2>

				<div className="mt-6 ">
					{burals?.length ? (
						<div className="flex flex-col gap-9 sm:gap-6">
							{burals.map((item: any) => (
								<BuralCard item={item} key={item.id} />
							))}
						</div>
					) : (
						<div>Захоронений не найдено</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default BuralsPage;
