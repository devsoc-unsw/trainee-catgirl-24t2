import * as React from "react";
import { Search as SearchIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  setState: (value: string) => string;
}

const Search = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, setState, ...props }, ref) => {
    return (
      <div className="absolute w-96 items-end flex flex-col justify-center">
        <input
          type={type}
          placeholder="Search"
          onChange={(e) => setState(e.target.value)}
          className={cn(
            "absolute text-center z-0 flex h-12 w-full rounded-full bg-accent pl-5 pr-12 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
        <div className="relative z-10 h-full margin-auto pr-4 text-muted-foreground">
          <SearchIcon />
        </div>
      </div>
    );
  },
);
Search.displayName = "Search";

export { Search };
