import PatientDetailClient from "./patient-detail-client";

export default function PatientDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return params.then((resolvedParams) => (
    <PatientDetailClient patientId={resolvedParams.id} />
  ));
}
