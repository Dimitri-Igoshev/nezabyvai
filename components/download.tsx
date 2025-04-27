import { Image } from "@heroui/image";

export const Download = () => {
  return (
    <div className="flex items-center gap-7">
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
