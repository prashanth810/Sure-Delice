import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { banquetOccasions } from "@/data/site";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  mobile: z
    .string()
    .min(10, "Enter a valid mobile number")
    .max(15, "Enter a valid mobile number"),
  occasion: z.string().min(1, "Select an occasion"),
  date: z.string().min(1, "Choose a date"),
  guests: z.string().min(1, "Enter expected guest count"),
  message: z.string().max(500).optional(),
});

type FormValues = z.infer<typeof schema>;

export function EnquiryForm({ id = "enquiry" }: { id?: string }) {
  const [sent, setSent] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      mobile: "",
      occasion: "",
      date: "",
      guests: "",
      message: "",
    },
  });

  if (sent) {
    return (
      <div id={id} className="card-royal p-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-gold" aria-hidden="true" />
        <h3 className="mt-4 font-display text-xl text-primary">
          Thank you. Your event enquiry has been received.
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Our banquet team will contact you shortly to discuss dates, menu and
          arrangements.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => {
            form.reset();
            setSent(false);
          }}
        >
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      id={id}
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
        <Field label="Occasion" error={form.formState.errors.occasion?.message}>
          <Select
            onValueChange={(v) =>
              form.setValue("occasion", v, { shouldValidate: true })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select occasion" />
            </SelectTrigger>
            <SelectContent>
              {banquetOccasions.map((o) => (
                <SelectItem key={o} value={o}>
                  {o}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field label="Preferred Date" error={form.formState.errors.date?.message}>
          <Input type="date" {...form.register("date")} />
        </Field>
        <Field
          label="Expected Guests"
          error={form.formState.errors.guests?.message}
          className="sm:col-span-2"
        >
          <Input
            type="number"
            min={1}
            placeholder="e.g. 120"
            {...form.register("guests")}
          />
        </Field>
      </div>
      <Field label="Details (optional)">
        <Textarea
          rows={4}
          placeholder="Tell us about your event, menu preference (veg / non-veg) or timing."
          {...form.register("message")}
        />
      </Field>
      <Button type="submit" variant="gold" size="lg" className="w-full sm:w-auto">
        Request Event Enquiry
      </Button>
      <p className="text-xs text-muted-foreground">
        This is an enquiry request. Availability is confirmed by our team over a
        call.
      </p>
    </form>
  );
}

export function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
  className?: string | undefined;
}) {
  return (
    <div className={className}>
      <Label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </Label>
      {children}
      {error ? <p className="mt-1.5 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
