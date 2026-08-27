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
  name: z.string().min(2, "Please enter your full name"),
  mobile: z
    .string()
    .min(10, "Enter a valid mobile number")
    .max(15, "Enter a valid mobile number"),
  date: z.string().min(1, "Choose a date"),
  time: z.string().min(1, "Choose a time"),
  guests: z.string().min(1, "Number of guests is required"),
  request: z.string().max(400).optional(),
});

type FormValues = z.infer<typeof schema>;

export function ReservationForm() {
  const [sent, setSent] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      mobile: "",
      date: "",
      time: "",
      guests: "",
      request: "",
    },
  });

  if (sent) {
    return (
      <div className="card-royal p-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-gold" aria-hidden="true" />
        <h2 className="mt-4 font-display text-xl text-primary">
          Thank you. Your reservation request has been received.
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Our team will contact you shortly to confirm your table.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => {
            form.reset();
            setSent(false);
          }}
        >
          Make another request
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
        <Field label="Date" error={form.formState.errors.date?.message}>
          <Input type="date" {...form.register("date")} />
        </Field>
        <Field label="Time" error={form.formState.errors.time?.message}>
          <Input type="time" {...form.register("time")} />
        </Field>
        <Field
          label="Number of Guests"
          error={form.formState.errors.guests?.message}
          className="sm:col-span-2"
        >
          <Input
            type="number"
            min={1}
            placeholder="e.g. 4"
            {...form.register("guests")}
          />
        </Field>
      </div>
      <Field label="Special Request">
        <Textarea
          rows={4}
          placeholder="Birthday cake, high chair, seating preference…"
          {...form.register("request")}
        />
      </Field>
      <Button type="submit" variant="gold" size="lg" className="w-full sm:w-auto">
        Request Reservation
      </Button>
      <p className="text-xs text-muted-foreground">
        Tables are confirmed by our team over a call — this form sends a
        reservation request.
      </p>
    </form>
  );
}
