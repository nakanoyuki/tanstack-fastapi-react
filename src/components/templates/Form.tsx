import { useNavigate } from "@tanstack/react-router";
import { useState, ChangeEvent, FormEvent } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    comment: "",
  });
  const handleChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate({ to: "/result", search: form });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          名前
          <input
            name="name"
            id="name"
            type="text"
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="age">
          年齢
          <select name="age" id="age" value={form.age} onChange={handleChange}>
            <option value={10}>10代</option>
            <option value={20}>20代</option>
            <option value={30}>30代</option>
          </select>
        </label>
        <br />
        <label htmlFor="age">
          性別
          <input
            name="gender"
            id="male"
            type="radio"
            value="male"
            onChange={handleChange}
          />
          男性
          <input
            name="gender"
            id="female"
            type="radio"
            value="female"
            onChange={handleChange}
          />
          女性
          <input
            name="gender"
            id="other"
            type="radio"
            value="other"
            onChange={handleChange}
          />
          その他
        </label>
        <br />
        <label htmlFor="comment">
          コメント
          <textarea
            name="comment"
            placeholder="コメント入れてください"
            value={form.comment}
            onChange={handleChange}
          ></textarea>
        </label>
        <button type="submit">送信</button>
      </form>
    </>
  );
};

export default Form;
