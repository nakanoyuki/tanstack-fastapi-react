import { Box, Container, Typography } from "@mui/material";
import { useSearch } from "@tanstack/react-router";

const Result = () => {
  const search = useSearch({ from: "/result" });

  return (
    <Container>
      <Box
        sx={{
          paddingTop: 4,
          paddingBottom: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" sx={{ color: "black", fontSize: 24 }}>
          検索結果
        </Typography>

        <Box sx={{ width: "100%", mt: 2, color: "black" }}>
          名前: {search.name}
        </Box>
        <Box sx={{ width: "100%", mt: 2, color: "black" }}>
          年齢: {search.age}
        </Box>
        <Box sx={{ width: "100%", mt: 2, color: "black" }}>
          性別: {search.gender}
        </Box>
        <Box sx={{ width: "100%", mt: 2, color: "black" }}>
          コメント: {search.comment}
        </Box>
      </Box>
    </Container>
  );
};

export default Result;
