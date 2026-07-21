/** US SOC-aligned job categories for application forms. */
export const jobTypeGroups = [
  {
    label: "Business & Professional",
    options: [
      "Management & Leadership",
      "Business & Financial Operations",
      "Accounting & Bookkeeping",
      "Human Resources",
      "Sales & Business Development",
      "Marketing & Communications",
      "Customer Service & Call Center",
      "Administrative & Office Support",
      "Legal & Compliance",
      "Real Estate",
    ],
  },
  {
    label: "Technology & Engineering",
    options: [
      "Information Technology (IT)",
      "Software Development",
      "Data Science & Analytics",
      "Cybersecurity",
      "Engineering",
      "Architecture & Design",
      "Science & Research",
    ],
  },
  {
    label: "Healthcare & Social Services",
    options: [
      "Healthcare – Clinical",
      "Healthcare – Nursing",
      "Healthcare – Support",
      "Mental Health & Counseling",
      "Social & Community Services",
      "Personal Care & Home Health",
    ],
  },
  {
    label: "Education & Training",
    options: [
      "Education & Instruction",
      "Training & Development",
      "Childcare & Early Education",
    ],
  },
  {
    label: "Skilled Trades & Construction",
    options: [
      "Construction & Extraction",
      "Electrical, Plumbing & HVAC",
      "Installation, Maintenance & Repair",
      "Manufacturing & Production",
      "General Labor",
    ],
  },
  {
    label: "Transportation & Logistics",
    options: [
      "Warehouse & Distribution",
      "Transportation & Delivery",
      "Supply Chain & Logistics",
    ],
  },
  {
    label: "Hospitality, Retail & Service",
    options: [
      "Hospitality & Food Service",
      "Retail & Store Operations",
      "Cleaning & Janitorial",
      "Security & Protective Services",
      "Personal Care & Beauty",
    ],
  },
  {
    label: "Creative, Media & Other",
    options: [
      "Arts, Design & Creative",
      "Media & Entertainment",
      "Sports & Fitness",
      "Agriculture & Farming",
      "Military & Veterans",
      "Remote / Work From Home",
      "Internship / Apprenticeship",
      "Entry Level / No Experience Required",
      "Other",
    ],
  },
] as const;

export const jobTypeOptions = jobTypeGroups.flatMap((group) => group.options);
