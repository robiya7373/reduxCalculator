import { React, useState } from "react";
import { Stack } from "@mui/material";
import FormInput from "./FormInput";
import Result from "./Result";
import DateObject from "react-date-object";
const Logic = () => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  let date = new DateObject();
  const info = (info) => {
    if (date.day - info.day < 0) {
      let day = 30 - (info.day - date.day);
      let month = 12 - (info.month - date.month.number + 1);
      let year = date.year - info.year - 1;
      setDay(day);
      setMonth(month);
      setYear(year);
    } else if (date.month.number - info.month < 0) {
      let day = date.day - info.day;
      let month = 12 - (info.month - date.month.number);
      let year = date.year - info.year - 1;
      setDay(day);
      setMonth(month);
      setYear(year);
    } else {
      let day = date.day - info.day;
      let month = date.month.number - info.month;
      let year = date.year - info.year;
      setDay(day);
      setMonth(month);
      setYear(year);
    }
  };

  return (
    <Stack
      bgcolor="hsl(0, 0%, 100%)"
      maxWidth="500px"
      sx={{
        borderRadius: "15px",
        borderBottomRightRadius: "150px",
        paddingInline: { lg: "80px", md: "55px", sm: "25px", xs: "15px" },
        paddingBlock: "30px",
        marginInline: "6px",
      }}
    >
      <FormInput info={info} />
      <Result day={day} month={month} year={year} />
    </Stack>
  );
};

export default Logic;
