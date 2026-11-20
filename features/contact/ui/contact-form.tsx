"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { controlClassName, FormField } from "@/components/ui/form-field";
import { plans } from "@/features/home/data/pricing";
import { cn } from "@/lib/cn";
import { applyApiErrorsToForm } from "@/lib/form-errors";
import { isServiceId, services } from "@/lib/site";
import { contact } from "../content";
import { useSubmitContact } from "../hooks/useSubmitContact";
import {
  contactFormSchema,
  type ContactFormValues,
  type ContactRequest,
} from "../types/contact.types";

type Status = "idle" | "success" | "error";
type FieldName = keyof ContactFormValues;

const empty: ContactFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  service: "",
  message: "",
  agree: false,
};

/** Pre-fills service and message from links such as `/contact?service=subscription&plan=12-months`. */
function useInitialValues(): ContactFormValues {
  const params = useSearchParams();
  return useMemo(() => {
    const service = params.get("service");
    const plan = plans.find((candidate) => candidate.id === params.get("plan"));
    return {
      ...empty,
      service: isServiceId(service) ? service : "",
      message: plan ? contact.planMessage(plan.period) : "",
    };
  }, [params]);
}

export function ContactForm() {
  const initialValues = useInitialValues();
  const submitContact = useSubmitContact();
  const [status, setStatus] = useState<Status>("idle");
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<ContactFormValues, unknown, ContactRequest>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: initialValues,
  });

  const onSubmit = handleSubmit(async (values) => {
    setStatus("idle");
    try {
      await submitContact.mutateAsync(values);
      reset(empty);
      setStatus("success");
    } catch (error) {
      if (!applyApiErrorsToForm(error, setError)) setStatus("error");
    }
  });

  const describe = (name: FieldName) => ({
    id: `contact-${name}`,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `contact-${name}-error` : undefined,
  });
  const field = (name: Exclude<FieldName, "agree">) => ({
    id: `contact-${name}`,
    label: contact.fields[name].label,
    error: errors[name]?.message,
    required: true,
  });

  return (
    <form
      noValidate
      onSubmit={(event) => void onSubmit(event)}
      aria-labelledby="contact-form-title"
      className="shadow-panel w-full rounded-[27px] bg-white p-6 sm:p-9 lg:px-10 lg:py-9"
    >
      <h2
        id="contact-form-title"
        className="text-accent-600 text-center text-3xl font-medium tracking-tight lg:text-[2.5rem]"
      >
        {contact.formTitle}
      </h2>

      <fieldset
        disabled={submitContact.isPending}
        className="mt-6 grid gap-5 sm:grid-cols-2"
      >
        <FormField {...field("firstName")}>
          <input
            {...register("firstName")}
            {...describe("firstName")}
            autoComplete="given-name"
            placeholder={contact.fields.firstName.placeholder}
            className={cn(controlClassName, "h-12")}
          />
        </FormField>
        <FormField {...field("lastName")}>
          <input
            {...register("lastName")}
            {...describe("lastName")}
            autoComplete="family-name"
            placeholder={contact.fields.lastName.placeholder}
            className={cn(controlClassName, "h-12")}
          />
        </FormField>
        <FormField {...field("email")} className="sm:col-span-2">
          <input
            {...register("email")}
            {...describe("email")}
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder={contact.fields.email.placeholder}
            className={cn(controlClassName, "h-12")}
          />
        </FormField>
        <FormField {...field("phone")}>
          <input
            {...register("phone")}
            {...describe("phone")}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder={contact.fields.phone.placeholder}
            className={cn(controlClassName, "h-12")}
          />
        </FormField>
        <FormField {...field("dateOfBirth")}>
          <input
            {...register("dateOfBirth")}
            {...describe("dateOfBirth")}
            type="date"
            max={today}
            autoComplete="bday"
            className={cn(controlClassName, "h-12")}
          />
        </FormField>
        <FormField {...field("service")} className="sm:col-span-2">
          <select
            {...register("service")}
            {...describe("service")}
            className={cn(controlClassName, "h-12 cursor-pointer")}
          >
            <option value="">{contact.fields.service.placeholder}</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.label}
              </option>
            ))}
          </select>
        </FormField>
        <FormField {...field("message")} className="sm:col-span-2">
          <textarea
            {...register("message")}
            {...describe("message")}
            rows={4}
            placeholder={contact.fields.message.placeholder}
            className={cn(controlClassName, "min-h-28 resize-y py-3")}
          />
        </FormField>

        <div className="sm:col-span-2">
          <div className="flex items-center gap-3.5">
            <Checkbox {...register("agree")} {...describe("agree")} />
            <label
              htmlFor="contact-agree"
              className="text-body cursor-pointer text-base"
            >
              {contact.fields.agree.label}{" "}
              <Link
                href="/terms"
                className="text-brand-700 font-semibold underline underline-offset-2"
              >
                {contact.fields.agree.link}
              </Link>
            </label>
          </div>
          {errors.agree?.message ? (
            <p
              id="contact-agree-error"
              className="mt-1.5 text-sm font-medium text-red-700"
            >
              {errors.agree.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col-reverse gap-3 sm:col-span-2 sm:flex-row sm:gap-6">
          <Button
            variant="outline"
            size="lg"
            className="sm:flex-1"
            onClick={() => {
              reset(empty);
              setStatus("idle");
            }}
          >
            {contact.cancel}
          </Button>
          <Button
            type="submit"
            size="lg"
            className="sm:flex-1"
            aria-busy={submitContact.isPending}
          >
            {submitContact.isPending ? contact.sending : contact.submit}
          </Button>
        </div>
      </fieldset>

      <p
        role="status"
        className={cn(
          "rounded-xl text-center text-base font-medium",
          status === "idle" ? "sr-only" : "mt-5 px-4 py-3",
          status === "success" && "bg-brand-50 text-brand-700",
          status === "error" && "bg-red-50 text-red-700",
        )}
      >
        {status === "success"
          ? contact.success
          : status === "error"
            ? contact.failure
            : ""}
      </p>
    </form>
  );
}
