import {
  Box,
  Container,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "@tanstack/react-router";
import { useState, ChangeEvent, FormEvent, ChangeEventHandler } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    comment: "",
  });

  const handleChange = (
    e:
      | SelectChangeEvent<string>
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate({
      to: "/result",
      search: form,
    });
  };

  return (
    <Container>
      <Box
        sx={{
          marginTop: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5">アンケート提出</Typography>
        <TextField
          id="outlined-based"
          label="名前"
          variant="outlined"
          value={form.name}
          onChange={handleChange}
          fullWidth
        ></TextField>

        <Box sx={{ width: "100%", mt: 2 }}>
          <InputLabel id="demo-simple-select-label">年齢</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="年齢"
            value={form.age}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value={10}>10代</MenuItem>
            <MenuItem value={20}>20代</MenuItem>
            <MenuItem value={30}>30代</MenuItem>
          </Select>
        </Box>

        <fieldset>
          <legend>性別</legend>
          <label htmlFor="male">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={form.gender === "male"}
              onChange={handleChange}
            />
            男性
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={form.gender === "female"}
              onChange={handleChange}
            />
            女性
          </label>
          <label htmlFor="other">
            <input
              type="radio"
              id="other"
              name="gender"
              value="other"
              checked={form.gender === "other"}
              onChange={handleChange}
            />
            その他
          </label>
        </fieldset>
        <br />

        <label htmlFor="comment">
          コメント
          <textarea
            id="comment"
            name="comment"
            placeholder="コメント入れてください"
            value={form.comment}
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="submit">検索</button>
      </Box>
    </Container>
  );
};

export default Form;
