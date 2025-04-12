import { Image } from "@heroui/image";
import { cn } from "@heroui/theme";
import { FC } from "react";

interface RunningLineCardProps {
  className?: string;
}

export const RunningLineCard: FC<RunningLineCardProps> = ({
  className = "",
}) => {
  return (
    <div className={cn("bg-white rounded-2xl p-2.5 flex gap-2.5", className)}>
      <Image
        alt=""
        radius="lg"
        height={100}
        width={100}
        src="/golubkina.jpeg"
        className="object-cover saturate-0"
      />

      <div className="flex flex-col justify-between">
        <p className="font-semibold">22.03.2025</p>

        <div className="flex flex-col -mt-1">
          <p className="text-primary font-semibold">Голубкина</p>
          <p className="text-sm -mt-1">Лариса Ивановна</p>
        </div>

        <div className="flex items-center gap-1">
          <Image
            alt=""
            radius="full"
            height={20}
            width={20}
            src="/route.svg"
            className="object-cover cursor-pointer"
          />
          <p className="text-[10px] cursor-pointer hover:text-primary">К месту захоронения</p>
        </div>
      </div>
    </div>
  );
};
