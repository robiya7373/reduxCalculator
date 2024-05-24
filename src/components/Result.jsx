import React from "react";
import { Stack, Typography } from "@mui/material";

const Result = ({ day, month, year }) => {
  return (
    <Stack>
      <Typography className="result-text">
        <span style={{ color: "hsl(129, 100%, 50%)" }}>
          {year === "" ? "- -" : year}
        </span>
        years
      </Typography>
      <Typography className="result-text">
        <span style={{ color: "hsl(129, 100%, 50%)" }}>
          {month === "" ? "- -" : month}
        </span>
        months
      </Typography>
      <Typography className="result-text">
        <span style={{ color: "hsl(129, 100%, 50%)" }}>
          {day === "" ? "- -" : day}
        </span>
        days
      </Typography>
    </Stack>
  );
};

export default Result;
