import React from "react";
import { Box, Fab, Stack, TextField, Typography } from "@mui/material";
import ArrowIcon from "../assets/icon-arrow.svg";
import { useForm } from "react-hook-form";
import DateObject from "react-date-object";
import { useDispatch } from "react-redux";
import { setFormData } from "../redux/formInputSlice";

const FormInput = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let date = new DateObject();

  const onSubmit = (data) => {
    dispatch(setFormData(data));
  };

  return (
    <Stack component="form" gap={2} onSubmit={handleSubmit(onSubmit)}>
      <Stack flexDirection="row" gap={2}>
        <Box>
          <Typography
            className={
              !!errors?.day ? "fonts-normal fonts-normal-error" : "fonts-normal"
            }
          >
            Day
          </Typography>
          <TextField
            type="number"
            placeholder="DD"
            color="secondary"
            {...register("day", {
              required: "This field is required",
              validate: {
                validDay: (value) => value <= 31 || "Must be a valid day",
              },
            })}
            error={!!errors?.day}
            helperText={!!errors?.day ? errors?.day.message : null}
          />
        </Box>
        <Box>
          <Typography
            className={
              !!errors?.month
                ? "fonts-normal fonts-normal-error"
                : "fonts-normal"
            }
          >
            Month
          </Typography>
          <TextField
            type="number"
            placeholder="MM"
            color="secondary"
            {...register("month", {
              required: "This field is required",
              validate: {
                validMonth: (value) => value <= 12 || "Must be a valid month",
              },
            })}
            error={!!errors?.month}
            helperText={!!errors?.month ? errors?.month.message : null}
          />
        </Box>
        <Box>
          <Typography
            className={
              !!errors?.year
                ? "fonts-normal fonts-normal-error"
                : "fonts-normal"
            }
          >
            Year
          </Typography>
          <TextField
            type="number"
            placeholder="YYYY"
            color="secondary"
            {...register("year", {
              required: "This field is required",
              validate: {
                validYear: (value) => value <= date.year || "Must be in past",
              },
            })}
            error={!!errors?.year}
            helperText={!!errors?.year ? errors?.year.message : null}
          />
        </Box>
      </Stack>
      <Stack flexDirection="row" alignItems="center">
        <Box
          width="100%"
          border="0.5px solid hsl(0, 0%, 86%)"
          sx={{ opacity: "50%" }}
        />
        <Fab
          type="submit"
          size="large"
          className="submit-btn"
          sx={{
            position: "relative",
            left: { lg: "50px", md: "30px", sm: "-30px", xs: "-150px" },
            backgroundColor: "hsl(129, 100%, 50%)",
            boxShadow: "none",
            padding: "34px",
            ":hover":"hsl(0, 0%, 8%)"
          }}
        >
          <img src={ArrowIcon} alt="Submit" />
        </Fab>
      </Stack>
    </Stack>
  );
};

export default FormInput;
