import { Image } from "@heroui/image";

export const Download = () => {
  return (
    <div className="flex items-center gap-7">
      <Image
        alt=""
        radius="none"
        height={36}
        src="/apple.svg"
        className="object-cover cursor-pointer hover:scale-110 transition-all"
      />
      <Image
        alt=""
        radius="none"
        height={36}
        src="/android.png"
        className="object-cover cursor-pointer hover:scale-110 transition-all"
      />
      <Image
        alt=""
        radius="none"
        height={36}
        src="/rustore.png"
        className="object-cover cursor-pointer hover:scale-110 transition-all"
      />
    </div>
  );
};
