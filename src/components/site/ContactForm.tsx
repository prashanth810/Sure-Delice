import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field } from "./EnquiryForm";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  mobile: z
    .string()
    .min(10, "Enter a valid mobile number")
    .max(15, "Enter a valid mobile number"),
  email: z.string().email("Enter a valid email").optional().or(z.literal("")),
  message: z.string().min(5, "Tell us how we can help"),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", mobile: "", email: "", message: "" },
  });

  if (sent) {
    return (
      <div className="card-royal p-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-gold" aria-hidden="true" />
        <h3 className="mt-4 font-display text-xl text-primary">
          Thank you. Your message has been received.
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Our team will get back to you shortly.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => {
            form.reset();
            setSent(false);
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={form.handleSubmit(() => setSent(true))}
      className="card-royal grid gap-5 p-6 md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" error={form.formState.errors.name?.message}>
          <Input placeholder="Your name" {...form.register("name")} />
        </Field>
        <Field label="Mobile Number" error={form.formState.errors.mobile?.message}>
          <Input
            type="tel"
            inputMode="tel"
            placeholder="+91 00000 00000"
            {...form.register("mobile")}
          />
        </Field>
        <Field
          label="Email (optional)"
          error={form.formState.errors.email?.message}
          className="sm:col-span-2"
        >
          <Input type="email" placeholder="you@example.com" {...form.register("email")} />
        </Field>
      </div>
      <Field label="Message" error={form.formState.errors.message?.message}>
        <Textarea
          rows={4}
          placeholder="Your question about dining, banquet or catering."
          {...form.register("message")}
        />
      </Field>
      <Button type="submit" variant="gold" size="lg" className="w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}
