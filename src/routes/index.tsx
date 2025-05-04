import { createFileRoute } from "@tanstack/react-router";
import Form from "../components/templates/Form";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="bg-white">
      <Form />
    </div>
  );
}
