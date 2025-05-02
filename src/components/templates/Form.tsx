import { useState, ChangeEvent } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
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
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="age">
          年齢
          <select name="age" id="age" value={form.age} onChange={handleChange}>
            <option value={10}>10代</option>
            <option value={20}>20代</option>
            <option value={30}>30代</option>
          </select>
        </label>
      </form>
    </>
  );
};

export default Form;
