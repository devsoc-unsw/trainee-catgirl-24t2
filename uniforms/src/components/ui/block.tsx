"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Slider } from "@/components/ui/slider";

interface BlockProps {
  variant:
    | "short"
    | "long"
    | "radio"
    | "checkbox"
    | "dropdown"
    | "slider"
    | "radio-grid"
    | "checkbox-grid";
  prompt: string;
  description?: string;
  items?: { value: string; label: string }[];
}

export function Block({ variant, prompt, description, items }: BlockProps) {
  return (
    <Card className="w-[95%] lg:w-[512px]">
      <h2 className="text-xl">{prompt}</h2>
      {description ? <p>{description}</p> : null}
      {variant === "short" ? (
        <Input placeholder="uwu..." />
      ) : variant === "long" ? (
        <Textarea placeholder="owo..." />
      ) : variant === "radio" ? (
        <RadioGroup>
          {items?.map((item) => (
            <div className="flex items-center space-x-2">
              <RadioGroupItem value={item.value} id={item.value} />
              <Label htmlFor={item.value}>{item.label}</Label>
            </div>
          ))}
        </RadioGroup>
      ) : variant === "checkbox" ? (
        items?.map((item) => (
          <div className="flex items-center space-x-2">
            <Checkbox value={item.value} id={item.value} />
            <Label htmlFor={item.value}>{item.label}</Label>
          </div>
        ))
      ) : variant === "slider" ? (
        <Slider defaultValue={[50]} max={100} step={1} className="my-4" />
      ) : variant === "radio-grid" ? (
        <div>Radio Grid</div>
      ) : variant === "checkbox-grid" ? (
        <div>Checkbox Grid</div>
      ) : null}
    </Card>
  );
}
