import { useSearch } from "@tanstack/react-router";

const Result = () => {
  const search = useSearch({ from: "/result" });

  return (
    <div>
      <h1>検索結果</h1>
      <p>名前: {search.name}</p>
      <p>年齢: {search.age}</p>
      <p>性別: {search.gender}</p>
      <p>コメント: {search.comment}</p>
    </div>
  );
};

export default Result;
