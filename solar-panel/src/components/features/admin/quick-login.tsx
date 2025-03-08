import type { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { LoginSchemaType } from "@/utils/schemas/auth";

interface QuickLoginProps {
  form: ReturnType<typeof useForm<LoginSchemaType>>;
}

export default function QuickLogin({ form }: QuickLoginProps): React.ReactNode {
  const handleQuickLogin = () => {
    form.setValue("email", process.env.NEXT_PUBLIC_ADMIN_EMAIL || "");
    form.setValue("password", process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "");
  };

  return (
    <Card className="mb-6 bg-blue-50 p-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-blue-800">Quick Admin Access</h3>
          <p className="text-sm text-blue-600">
            Click the button to fill login credentials
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          className="border-blue-300 bg-white text-blue-700 hover:bg-blue-100"
          onClick={handleQuickLogin}
        >
          Fill Admin Credentials
        </Button>
      </div>
    </Card>
  );
}
