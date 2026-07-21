"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ChevronRight, Lock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/Button";
import { USLocationInput } from "@/components/USLocationInput";
import { jobTypeGroups } from "@/lib/job-types";
import { clsx } from "clsx";

function formatUSPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

const basicSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  age: z.string().min(1, "Please select your age range"),
  phone: z
    .string()
    .refine(
      (val) => val.replace(/\D/g, "").length === 10,
      "Enter a valid 10-digit US phone number"
    ),
  email: z.string().email("Valid email required"),
  location: z.string().min(2, "Location is required"),
  gender: z.string().min(1, "Please select gender"),
  monthlyIncome: z.string().min(1, "Please select income range"),
});

const workSchema = z.object({
  employmentStatus: z.string().min(1, "Please select employment status"),
  lookingFor: z.string().min(1, "Please select what you're looking for"),
  preferredJobType: z.string().min(1, "Please select preferred job type"),
  additionalInfo: z.string().optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to continue" }),
  }),
});

type BasicForm = z.infer<typeof basicSchema>;
type WorkForm = z.infer<typeof workSchema>;
type FullForm = BasicForm & WorkForm;

const steps = [
  { id: 1, label: "Basic Information" },
  { id: 2, label: "Work Details" },
  { id: 3, label: "Review & Submit" },
];

const ageOptions = ["18–24", "25–34", "35–44", "45–54", "55+"];
const genderOptions = ["Male", "Female"];
const incomeOptions = [
  "Below $500",
  "$500 – $1,000",
  "$1,000 – $2,000",
  "$2,000 – $3,500",
  "$3,500 – $5,000",
  "Above $5,000",
];

const fieldLabels: Record<string, string> = {
  firstName: "First Name",
  lastName: "Last Name",
  age: "Age",
  phone: "Phone Number",
  email: "Email Address",
  location: "Current Location",
  gender: "Gender",
  monthlyIncome: "Monthly Income",
  employmentStatus: "Employment Status",
  lookingFor: "Looking For",
  preferredJobType: "Preferred Job Type",
  additionalInfo: "Additional Information",
};
const employmentOptions = [
  "Unemployed",
  "Employed – Full Time",
  "Employed – Part Time",
  "Self-Employed",
  "Student",
];
const lookingForOptions = [
  "Full-Time Job",
  "Part-Time Job",
  "Freelance / Contract",
  "Any Opportunity",
];

function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-navy">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy placeholder:text-slate-400 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

export default function ApplyPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<FullForm>>({});

  const basicForm = useForm<BasicForm>({
    resolver: zodResolver(basicSchema),
    defaultValues: formData as BasicForm,
  });

  const workForm = useForm<WorkForm>({
    resolver: zodResolver(workSchema),
    defaultValues: formData as WorkForm,
  });

  const onBasicSubmit = (data: BasicForm) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(2);
  };

  const onWorkSubmit = (data: WorkForm) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(3);
  };

  const onFinalSubmit = async () => {
    setSubmitting(true);
    setSubmitError(null);

    const payload = { ...formData };
    delete payload.consent;

    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setSubmitError(json.error ?? "Failed to submit. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setSubmitError("Network error. Check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const phoneField = basicForm.register("phone");

  if (submitted) {
    return (
      <div className="min-h-screen bg-surface pt-[72px]">
        <div className="mx-auto max-w-lg px-4 py-24 text-center sm:px-6">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-600 shadow-lg shadow-green-500/30">
            <CheckCircle2 className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-extrabold text-navy">Application Submitted!</h1>
          <p className="mt-4 text-muted">
            Thank you for applying. Our team will review your profile and match
            you with relevant employers. We&apos;ll contact you as soon as a
            suitable opportunity is identified.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:brightness-110"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <div className="border-b border-border bg-white pt-[72px]">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
          <nav className="mb-4 flex items-center gap-1.5 text-sm text-muted">
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="font-semibold text-navy">Apply Now</span>
          </nav>
          <h1 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Tell us about yourself
          </h1>
          <p className="mt-2 text-muted">
            Complete your professional profile so we can match you with the
            right opportunities.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">

        {/* Stepper */}
        <div className="mb-8 rounded-2xl border border-border bg-white px-4 py-6 shadow-sm sm:px-8">
          <ol className="flex items-start">
            {steps.map((s, i) => (
              <li
                key={s.id}
                className="flex min-w-0 flex-1 flex-col items-center"
              >
                <div className="flex w-full items-center">
                  {i > 0 ? (
                    <div
                      className={clsx(
                        "h-0.5 flex-1 transition-colors",
                        step >= s.id ? "bg-primary" : "bg-slate-200"
                      )}
                      aria-hidden
                    />
                  ) : (
                    <div className="flex-1" aria-hidden />
                  )}
                  <div
                    className={clsx(
                      "relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors",
                      step >= s.id
                        ? "bg-primary text-white shadow-sm shadow-primary/30"
                        : "bg-slate-200 text-slate-500"
                    )}
                  >
                    {s.id}
                  </div>
                  {i < steps.length - 1 ? (
                    <div
                      className={clsx(
                        "h-0.5 flex-1 transition-colors",
                        step > s.id ? "bg-primary" : "bg-slate-200"
                      )}
                      aria-hidden
                    />
                  ) : (
                    <div className="flex-1" aria-hidden />
                  )}
                </div>
                <span
                  className={clsx(
                    "mt-2 hidden max-w-[7rem] text-center text-[11px] font-medium leading-tight sm:block sm:max-w-none sm:text-xs",
                    step >= s.id ? "text-primary" : "text-muted"
                  )}
                >
                  {s.label}
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-3 text-center text-xs font-medium text-primary sm:hidden">
            Step {step} of {steps.length}: {steps[step - 1].label}
          </p>
        </div>

        {/* Form card */}
        <div className="rounded-2xl border border-border bg-white p-6 shadow-lg sm:p-8">
          {step === 1 && (
            <form
              onSubmit={basicForm.handleSubmit(onBasicSubmit)}
              className="space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  label="First Name"
                  error={basicForm.formState.errors.firstName?.message}
                >
                  <input
                    {...basicForm.register("firstName")}
                    className={inputClass}
                    placeholder="Juan"
                  />
                </FormField>
                <FormField
                  label="Last Name"
                  error={basicForm.formState.errors.lastName?.message}
                >
                  <input
                    {...basicForm.register("lastName")}
                    className={inputClass}
                    placeholder="Dela Cruz"
                  />
                </FormField>
                <FormField
                  label="Age"
                  error={basicForm.formState.errors.age?.message}
                >
                  <select {...basicForm.register("age")} className={inputClass}>
                    <option value="">Select age range</option>
                    {ageOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </FormField>
                <FormField
                  label="Phone Number"
                  error={basicForm.formState.errors.phone?.message}
                >
                  <input
                    {...phoneField}
                    onChange={(e) => {
                      const formatted = formatUSPhone(e.target.value);
                      e.target.value = formatted;
                      phoneField.onChange({
                        ...e,
                        target: { ...e.target, value: formatted },
                      });
                    }}
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    maxLength={14}
                    className={inputClass}
                    placeholder="(395) 293-7823"
                  />
                </FormField>
                <FormField
                  label="Email Address"
                  error={basicForm.formState.errors.email?.message}
                >
                  <input
                    {...basicForm.register("email")}
                    type="email"
                    className={inputClass}
                    placeholder="you@email.com"
                  />
                </FormField>
                <FormField
                  label="Current Location"
                  error={basicForm.formState.errors.location?.message}
                >
                  <Controller
                    name="location"
                    control={basicForm.control}
                    render={({ field }) => (
                      <USLocationInput
                        value={field.value ?? ""}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        error={basicForm.formState.errors.location?.message}
                        className={inputClass}
                        placeholder="City, State"
                      />
                    )}
                  />
                </FormField>
                <FormField
                  label="Monthly Income ($)"
                  error={basicForm.formState.errors.monthlyIncome?.message}
                >
                  <select
                    {...basicForm.register("monthlyIncome")}
                    className={inputClass}
                  >
                    <option value="">Select income range (USD)</option>
                    {incomeOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </FormField>
                <FormField
                  label="Gender"
                  error={basicForm.formState.errors.gender?.message}
                >
                  <select
                    {...basicForm.register("gender")}
                    className={inputClass}
                  >
                    <option value="">Select gender</option>
                    {genderOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </FormField>
              </div>
              <div className="flex justify-end pt-2">
                <Button type="submit" size="lg">
                  Continue
                </Button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form
              onSubmit={workForm.handleSubmit(onWorkSubmit)}
              className="space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  label="Employment Status"
                  error={workForm.formState.errors.employmentStatus?.message}
                >
                  <select
                    {...workForm.register("employmentStatus")}
                    className={inputClass}
                  >
                    <option value="">Select status</option>
                    {employmentOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </FormField>
                <FormField
                  label="Are you looking for?"
                  error={workForm.formState.errors.lookingFor?.message}
                >
                  <select
                    {...workForm.register("lookingFor")}
                    className={inputClass}
                  >
                    <option value="">Select option</option>
                    {lookingForOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </FormField>
              </div>
              <FormField
                label="Preferred Job Type"
                error={workForm.formState.errors.preferredJobType?.message}
              >
                <select
                  {...workForm.register("preferredJobType")}
                  className={inputClass}
                >
                  <option value="">Select job type</option>
                  {jobTypeGroups.map((group) => (
                    <optgroup key={group.label} label={group.label}>
                      {group.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </FormField>
              <FormField label="Additional Information">
                <textarea
                  {...workForm.register("additionalInfo")}
                  rows={4}
                  className={inputClass}
                  placeholder="Tell us more about your skills, experience, or preferences..."
                />
              </FormField>
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  {...workForm.register("consent")}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                />
                <span className="text-sm text-muted">
                  I agree to share my information with vetted employers for job
                  matching purposes, and I have read and agree to the{" "}
                  <Link
                    href="/privacy"
                    className="font-medium text-primary hover:underline"
                    target="_blank"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/terms"
                    className="font-medium text-primary hover:underline"
                    target="_blank"
                  >
                    Terms of Service
                  </Link>
                  .
                </span>
              </label>
              {workForm.formState.errors.consent && (
                <p className="text-xs text-red-500">
                  {workForm.formState.errors.consent.message}
                </p>
              )}
              <div className="flex justify-between pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(1)}
                >
                  Back
                </Button>
                <Button type="submit" size="lg">
                  Review Application
                </Button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-navy">
                Review your application
              </h2>
              <dl className="divide-y divide-slate-100 rounded-lg border border-slate-100">
                {Object.entries(formData).map(([key, value]) => {
                  if (key === "consent") return null;
                  const label = fieldLabels[key] ?? key;
                  return (
                    <div
                      key={key}
                      className="flex justify-between gap-4 px-4 py-3 text-sm"
                    >
                      <dt className="font-medium text-muted">{label}</dt>
                      <dd className="text-right text-navy">{String(value)}</dd>
                    </div>
                  );
                })}
              </dl>
              <div className="flex items-center gap-2 text-sm text-muted">
                <Lock className="h-4 w-4 text-primary" />
                Your data is encrypted and securely stored.
              </div>
              {submitError && (
                <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {submitError}
                </p>
              )}
              <div className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(2)}
                  disabled={submitting}
                >
                  Back
                </Button>
                <Button size="lg" onClick={onFinalSubmit} disabled={submitting}>
                  {submitting ? "Submitting…" : "Submit & Get Matched"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
