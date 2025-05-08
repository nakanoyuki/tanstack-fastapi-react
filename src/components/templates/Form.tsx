import {
  Box,
  Button,
  Container,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
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
        component="form"
        sx={{
          paddingTop: 4,
          paddingBottom: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <Typography variant="h1" sx={{ color: "black", fontSize: 24 }}>
          フォーム提出
        </Typography>

        <Box sx={{ width: "100%", mt: 2 }}>
          <FormLabel
            component="legend"
            sx={{
              textAlign: "left",
              display: "inline-block",
              width: "100%",
              color: "black",
            }}
          >
            名前
          </FormLabel>
          <TextField
            name="name"
            label="名前"
            variant="outlined"
            value={form.name}
            onChange={handleChange}
            fullWidth
          />
        </Box>

        <Box sx={{ width: "100%", mt: 2 }}>
          <InputLabel id="demo-simple-select-label" sx={{ color: "black" }}>
            年齢
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="age"
            label="年齢"
            value={form.age}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value="10代">10代</MenuItem>
            <MenuItem value="20代">20代</MenuItem>
            <MenuItem value="30代">30代</MenuItem>
          </Select>
        </Box>

        <Box sx={{ width: "100%", mt: 2 }}>
          <FormLabel
            component="legend"
            sx={{
              textAlign: "left",
              display: "inline-block",
              width: "100%",
              color: "black",
            }}
          >
            性別
          </FormLabel>
          <RadioGroup
            row
            name="gender"
            value={form.gender}
            onChange={handleChange}
          >
            <FormControlLabel
              sx={{ color: "black" }}
              value="女性"
              control={<Radio />}
              label="女性"
            />
            <FormControlLabel
              sx={{ color: "black" }}
              value="男性"
              control={<Radio />}
              label="男性"
            />
            <FormControlLabel
              sx={{ color: "black" }}
              value="その他"
              control={<Radio />}
              label="その他"
            />
          </RadioGroup>
        </Box>
        <TextField
          name="comment"
          label="コメント"
          placeholder="コメントを入力してください"
          multiline
          rows={4}
          value={form.comment}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          送信
        </Button>
      </Box>
    </Container>
  );
};

export default Form;
