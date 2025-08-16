'use client';
import PageTitle from "@/components/PageTitle";
import EditEventForm from "../../components/EditEventForm";
import { useParams } from "next/navigation";



export default function Page() {
    const params = useParams()
    const eventId = params.id as string
  return (
    <>
      <PageTitle title="Edit event" />
      <div className="max-w-3xl mx-auto p-4">
        <EditEventForm eventId={eventId} />
      </div>
      </>
  )
}
