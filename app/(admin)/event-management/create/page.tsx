import PageTitle from "@/components/PageTitle";
import CreateEventForm from "../components/CreateEventForm";

export default function page() {
  return (
    <>
      <PageTitle title="Create new event" />
      <div className="max-w-3xl mx-auto p-4">
        <CreateEventForm />
      </div>
      </>
  )
}
