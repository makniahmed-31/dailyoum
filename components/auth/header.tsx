import { Manrope } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Manrope({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 justify-center items-center">
      <h1
        className={cn(
          "flex justify-center items-center gap-x-2 text-3xl font-semibold",
          font.className
        )}
      >
        MyDailyoum
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
