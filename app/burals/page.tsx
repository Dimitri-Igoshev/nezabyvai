"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDisclosure } from "@heroui/react";

import { useGetTombsMutation } from "@/redux/services/buralApi";
import BuralCard from "@/components/BuralCard";
import { ViewModal } from "@/components/view-modal";

const BuralsPage = () => {
  const dispatch = useDispatch();
  const search = useSelector((state: any) => state.searchReducer);

  const [burals, setBurals] = useState<any[]>([]);

  const [getTombs] = useGetTombsMutation(search);

  const getBurals = async () => {
    console.log(333, search);
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
    console.log(222, search);
    getBurals();
  }, [search]);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [current, setCurrent] = useState();

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
                <BuralCard
                  key={item.id}
                  item={item}
                  onClick={() => {
                    setCurrent(item);
                    onOpen();
                  }}
                />
              ))}
            </div>
          ) : (
            <div>Захоронений не найдено</div>
          )}
        </div>
      </div>

      <ViewModal
        current={current}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </div>
  );
};

export default BuralsPage;
