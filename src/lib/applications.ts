import { z } from "zod";

export const applicationSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  age: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email(),
  location: z.string().min(1),
  gender: z.string().min(1),
  monthlyIncome: z.string().min(1),
  employmentStatus: z.string().min(1),
  lookingFor: z.string().min(1),
  preferredJobType: z.string().min(1),
  additionalInfo: z.string().optional(),
});

export type ApplicationInput = z.infer<typeof applicationSchema>;

export function toApplicationRow(data: ApplicationInput) {
  return {
    first_name: data.firstName,
    last_name: data.lastName,
    age: data.age,
    phone: data.phone,
    email: data.email,
    location: data.location,
    gender: data.gender,
    monthly_income: data.monthlyIncome,
    employment_status: data.employmentStatus,
    looking_for: data.lookingFor,
    preferred_job_type: data.preferredJobType,
    additional_information: data.additionalInfo ?? null,
  };
}
