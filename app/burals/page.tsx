"use client";

import { useGetTombsMutation } from "@/redux/services/buralApi";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const BuralsPage = () => {
	const searchParams = useSearchParams();

	const [search, setSearch] = useState<any>({
		query: searchParams.get("query") || "",
		birthday: searchParams.get("birthday") || "",
		deathday: searchParams.get("maxage") || "",
		limit: 20,
		offset: 0,
	});

	const [burals, setBurals] = useState<any[]>([]);

	const [getTombs] = useGetTombsMutation();

	const getBurals = async () => {
		await getTombs(search).unwrap().then((res: any) => setBurals(res?.tombs || [])).catch((err) => console.log(err));
	};

	useEffect(() => {
		setSearch({
			...search,
			query: searchParams.get("query") || "",
			birthday: searchParams.get("birthday") || "",
			deathday: searchParams.get("maxage") || "",
		});

    getBurals();

    console.log(burals);
	}, [searchParams]);

	return (
    <div className="container mx-auto flex flex-col mt-[80px] relative z-10">
      Захоронения не найдены
    </div>
  );
};

export default BuralsPage;