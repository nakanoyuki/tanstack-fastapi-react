import { createFileRoute } from "@tanstack/react-router";
import Result from "../components/templates/Result";

type SearchParams = {
  name: string;
  age: string;
  gender: string;
  comment: string;
};

export const Route = createFileRoute("/result")({
  validateSearch: (search: Record<string, unknown>): SearchParams => {
    return {
      name: String(search.name ?? ""),
      age: String(search.age ?? ""),
      gender: String(search.gender ?? ""),
      comment: String(search.comment ?? ""),
    };
  },
  component: ResultComponent,
});

function ResultComponent() {
  return (
    <div className="p-2">
      <Result />
    </div>
  );
}
