import { useState, ChangeEvent } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleAgeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAge(e.target.value);
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
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="age">
          年齢
          <select id="age" onChange={handleAgeChange}>
            <option value={10}>10代</option>
            <option value={20}>20代</option>
            <option value={30}>30代</option>
          </select>
        </label>
      </form>

      <p>{name}</p>
      <p>{age}</p>
    </>
  );
};

export default Form;
