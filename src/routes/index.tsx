import { createFileRoute } from "@tanstack/react-router";
import Form from "../components/templates/Form";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="p-2">
      <div>
        <Form />
      </div>
    </div>
  );
}
