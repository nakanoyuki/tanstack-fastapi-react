import { useState, ChangeEvent } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
  });
  const handleChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <>
      <form>
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
      </form>
      <p>
        {form.name}
        {form.age}
        {form.gender}
      </p>
    </>
  );
};

export default Form;
