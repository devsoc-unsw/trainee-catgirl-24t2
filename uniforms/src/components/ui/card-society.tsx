import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children?: React.ReactNode;
}
const Card = ({ className, children }: CardProps) => {
  return (
    <div className={cn("border-2 rounded-3xl p-6 flex", className)}>
      {children}
    </div>
  );
};

export { Card };
