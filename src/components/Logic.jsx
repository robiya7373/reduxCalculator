import React, { useEffect } from 'react';
import { Stack } from '@mui/material';
import FormInput from './FormInput';
import Result from './Result';
import DateObject from 'react-date-object';
import { useDispatch, useSelector } from 'react-redux';
import { setDay, setMonth, setYear } from '../redux/logicDateSlice';

const Logic = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);
  let date = new DateObject();

  useEffect(() => {
    if (formData.day && formData.month && formData.year) {
      let newDay, newMonth, newYear;

      if (date.day - formData.day < 0) {
        newDay = 30 - (formData.day - date.day);
        newMonth = 12 - (formData.month - date.month.number + 1);
        newYear = date.year - formData.year - 1;
      } else if (date.month.number - formData.month < 0) {
        newDay = date.day - formData.day;
        newMonth = 12 - (formData.month - date.month.number);
        newYear = date.year - formData.year - 1;
      } else {
        newDay = date.day - formData.day;
        newMonth = date.month.number - formData.month;
        newYear = date.year - formData.year;
      }

      dispatch(setDay(newDay));
      dispatch(setMonth(newMonth));
      dispatch(setYear(newYear));
    }
  }, [formData, date, dispatch]);

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
      <FormInput />
      <Result />
    </Stack>
  );
};

export default Logic;
