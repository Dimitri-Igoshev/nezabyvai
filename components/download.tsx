import { Image } from "@heroui/image";
import { cn } from "@heroui/theme";

export const Download = ({ className }: any) => {
  return (
    <div className={cn("flex items-center gap-7", className)}>
      <Image
        alt=""
        className="object-cover cursor-pointer hover:scale-110 transition-all"
        height={36}
        radius="none"
        src="/apple.svg"
      />
      <Image
        alt=""
        className="object-cover cursor-pointer hover:scale-110 transition-all"
        height={36}
        radius="none"
        src="/android.png"
      />
      <Image
        alt=""
        className="object-cover cursor-pointer hover:scale-110 transition-all"
        height={36}
        radius="none"
        src="/rustore.png"
      />
    </div>
  );
};
