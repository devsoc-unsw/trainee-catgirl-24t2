import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Search } from "@/components/ui/search";

function Forms() {
  const [uwu, owo] = useState("");

  return (
    <>
      <p>{uwu}</p>
      <Button>aaah</Button>
      <Button variant="destructive">danger ahead!!!</Button>
      <Switch></Switch>
      <Input />
      <Search setState={owo} />
    </>
  );
}

export default Forms;