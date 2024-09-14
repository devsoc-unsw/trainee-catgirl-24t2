"use client"

import { Card } from "@/components/ui/card"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
})

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    fetch("/authentication", {
      method: "POST",
      body: JSON.stringify({
        email: values.email,
        password: values.password
      })
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
  }

  return (
    <div className="flex flex-col w-[100vw] h-full items-center justify-center gap-[50px]">
      <p className="text-4xl font-bold">UNIFORM</p>
    <Card className="flex-col h-[60%] items-left w-[35vw] h-[60%] gap-[16px] p-[30px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-[100%]">Submit</Button>
          <div className="flex flex-row justify-between">
            <p className="underline">Forgot Password?</p>
            <p className="underline">Create a new account</p>
          </div>
        </form>
      </Form>
    </Card>
    </div>
  )
}