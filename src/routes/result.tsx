import { createFileRoute } from "@tanstack/react-router";
import Result from "../components/templates/Result";

export const Route = createFileRoute("/result")({
  component: ResultComponent,
});

function ResultComponent() {
  return (
    <div className="p-2">
      <Result/>
    </div>
  );
}
