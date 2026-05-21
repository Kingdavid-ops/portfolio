import Image from "next/image";
import { cn } from "@/lib/utils";
import profileimg from "@/asset/DSC_0404_1.jpg"

type ProfileImageProps = {
  className?: string;
  size?: number;
  priority?: boolean;
  alt?: string;
};

export function ProfileImage({
  className,
  size = 400,
  priority = false,
  alt = "Kingdavid Ifediorah Chidalu",
}: ProfileImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl glow-border",
        className,
      )}
    >
      <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-gold/20 z-10 pointer-events-none" />
      <Image
        src={profileimg}
        alt={alt}
        width={size}
        height={size}
        priority={priority}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
