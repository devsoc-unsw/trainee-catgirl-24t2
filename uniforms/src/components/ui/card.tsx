import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children?: React.ReactNode;
}
const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={cn(
        "border-[1px] bg-white bored-muted gap-4 rounded-xl m-3 p-6 flex flex-col",
        className,
      )}
    >
      {children}
    </div>
  );
};

export { Card };
