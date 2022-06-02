import { DatePicker } from "@mui/x-date-pickers";
import { Moment } from "moment";
import { useState } from "react";
import { Control, Controller } from "react-hook-form";
import CustomTextField from "./CustomTextField";

export default function CustomDatePicker({
  name,
  control,
  rules,
  label,
}: {
  name: string;
  control: Control;
  rules?: any;
  label: string;
}) {
  const [value, setValue] = useState<Moment | null>(null);

  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field }) => (
        <DatePicker
          {...field}
          value={value}
          onChange={(date) => {
            setValue(date);
            field.onChange(date?.toDate());
          }}
          renderInput={(params) => (
            <CustomTextField
              {...(params as any)}
              InputProps={{
                ...params.InputProps,
                disableUnderline: true,
                sx: {
                  borderRadius: 0,
                },
              }}
              InputLabelProps={{
                shrink: true,
              }}
              label={label}
            />
          )}
        />
      )}
    />
  );
}
