import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Search } from "@/components/ui/search";
import { Dropdown } from "@/components/ui/dropdown";
import { Block } from "@/components/ui/block";

function Forms() {
  const [uwu, owo] = useState("");

  return (
    <>
      <div className="flex items-center justify-center flex-col">
          <Block variant="short" prompt="Doomed???" />
          <Block
            variant="long"
            prompt="Doomed???????"
            description="why am I here just to have fun true"
          />
      <Block
        variant="radio"
        prompt="Doomed??????????????????"
        items={[
          { value: "nya", label: "Me" },
          { value: "uwu", label: "You" },
          { value: "owo", label: "Us ❤️" },
        ]}
      />
      <Block
        variant="checkbox"
        prompt="Doomed??????????????????"
        items={[
          { value: "nya", label: "Me" },
          { value: "uwu", label: "You" },
          { value: "owo", label: "Us ❤️" },
        ]}
      />
      <Block
        variant="slider"
        prompt="Doomed???????"
        description="why am I here just to have fun true"
      />
      </div>
    </>
  );
}

export default Forms;
