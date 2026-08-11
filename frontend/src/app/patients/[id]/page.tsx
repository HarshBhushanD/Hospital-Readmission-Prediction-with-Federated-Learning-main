import { DEMO_PATIENTS } from "@/lib/demo-data";
import PatientDetailClient from "./patient-detail-client";

export async function generateStaticParams() {
  return DEMO_PATIENTS.map((p) => ({
    id: p.external_ref,
  }));
}

export default async function PatientDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <PatientDetailClient patientId={id} />;
}

