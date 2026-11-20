"use client";

import { useTranslations } from "@/lib/dictionary/useTranslations";

export function DashboardPage() {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-2 p-8">
      <h1 className="text-heading-foreground text-xl font-semibold">
        {t("modules.dashboard.title")}
      </h1>
      <p className="text-muted-foreground">{t("modules.dashboard.subtitle")}</p>
    </div>
  );
}
