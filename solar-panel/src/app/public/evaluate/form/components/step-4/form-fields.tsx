"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEvaluationFormStore } from "@/stores/evaluation-form-store";

export default function StepFourFormFields(): React.ReactNode {
  const { formData } = useEvaluationFormStore();

  const formSections = [
    {
      title: "Personal Information",
      fields: [
        { label: "First Name", value: formData.firstName },
        { label: "Last Name", value: formData.lastName },
        { label: "Email", value: formData.email },
        { label: "Phone", value: formData.phone },
      ],
    },
    {
      title: "Property Details",
      fields: [
        { label: "Street Address", value: formData.streetAddress },
        { label: "Property Type", value: formData.propertyType },
        { label: "Roof Access", value: formData.roofAccess },
        {
          label: "Additional Location Info",
          value: formData.additionalLocation,
        },
      ],
    },
    {
      title: "Appointment Details",
      fields: [
        { label: "Date", value: formData.date?.toLocaleDateString() },
        { label: "Time Slot", value: formData.timeSlot },
        { label: "Additional Notes", value: formData.additionalNotes },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {formSections.map((section) => (
        <Card key={section.title}>
          <CardHeader>
            <CardTitle>{section.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {section.fields.map((field) => (
              <div key={field.label} className="flex flex-col gap-1">
                <p className="font-medium">{field.label}</p>
                <p>{field.value}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
